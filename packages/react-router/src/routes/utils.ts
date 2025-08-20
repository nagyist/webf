/**
 * Router management module
 *
 * Encapsulates routing navigation functionality with route guard mechanism for permission checks
 */
// eslint-disable-next-line no-restricted-imports
import { webf } from '@openwebf/webf-enterprise-typings';

type RoutePath = string;

/**
 * WebF Router object - provides comprehensive navigation APIs
 * Combines web-like history management with Flutter-like navigation patterns
 */
export const WebFRouter = {
  /**
   * Get the current state object associated with the history entry
   */
  get state() {
    return webf.hybridHistory.state;
  },
  
  /**
   * Get the current route path
   */
  get path() {
    return webf.hybridHistory.path as RoutePath
  },
  
  /**
   * Navigate to a specified route
   * Applies route guards for permission checks before navigation
   */
  push: async <P extends RoutePath>(path: P, state?: any) => {

    webf.hybridHistory.pushNamed(path, { arguments: state })
  },
  
  /**
   * Replace the current route without adding to history
   * Applies route guards for permission checks before navigation
   */
  replace: async <P extends RoutePath>(path: P, state?: any) => {
    webf.hybridHistory.pushReplacementNamed(path, { arguments: state});
  },
  
  /**
   * Navigate back to the previous route
   */
  back: () => {
    webf.hybridHistory.back();
  },
  
  /**
   * Close the current screen and return to the previous one
   * Flutter-style navigation method
   */
  pop: (result?: any) => {
    webf.hybridHistory.pop(result);
  },
  
  /**
   * Pop routes until reaching a specific route
   */
  popUntil: (path: RoutePath) => {
    webf.hybridHistory.popUntil(path)
  },
  
  /**
   * Pop the current route and push a new named route
   */
  popAndPushNamed: async <T extends RoutePath>(path: T, state?: any) => {
    webf.hybridHistory.popAndPushNamed(path, {arguments: state})
  },
  
  /**
   * Push a new route and remove routes until reaching a specific route
   */
  pushNamedAndRemoveUntil: async <T extends RoutePath>(path: T, state: any, untilPath: RoutePath) => {
    webf.hybridHistory.pushNamedAndRemoveUntil(state, path, untilPath)
  },
  
  /**
   * Push a new route and remove all routes until a specific route (Flutter-style)
   */
  pushNamedAndRemoveUntilRoute: async <T extends RoutePath>(newPath: T, untilPath: RoutePath, state?: any) => {
    webf.hybridHistory.pushNamedAndRemoveUntilRoute(newPath, untilPath, { arguments: state })
  },
  
  /**
   * Check if the navigator can go back
   */
  canPop: (): boolean => {
    return webf.hybridHistory.canPop();
  },
  
  /**
   * Pop the current route if possible
   * Returns true if the pop was successful, false otherwise
   */
  maybePop: (result?: any): boolean => {
    return webf.hybridHistory.maybePop(result);
  },
  
  /**
   * Push a new state to the history stack (web-style navigation)
   */
  pushState: (state: any, name: string) => {
    webf.hybridHistory.pushState(state, name);
  },
  
  /**
   * Replace the current history entry with a new one (web-style navigation)
   */
  replaceState: (state: any, name: string) => {
    webf.hybridHistory.replaceState(state, name);
  },
  
  /**
   * Pop and push with restoration capability
   * Returns a restoration ID string
   */
  restorablePopAndPushState: (state: any, name: string): string => {
    return webf.hybridHistory.restorablePopAndPushState(state, name);
  },
  
  /**
   * Pop and push named route with restoration capability
   * Returns a restoration ID string
   */
  restorablePopAndPushNamed: async <T extends RoutePath>(path: T, state?: any): Promise<string> => {
    return webf.hybridHistory.restorablePopAndPushNamed(path, { arguments: state });
  }
}

/**
 * Route parameters extracted from dynamic routes
 */
export interface RouteParams {
  [key: string]: string;
}

/**
 * Route match result
 */
export interface RouteMatch {
  path: string;
  params: RouteParams;
  isExact: boolean;
}

/**
 * Convert a route pattern to a regular expression
 * @param pattern Route pattern like "/user/:userId" or "/category/:catId/product/:prodId"
 * @returns Object with regex and parameter names
 */
export function pathToRegex(pattern: string): { regex: RegExp; paramNames: string[] } {
  const paramNames: string[] = [];
  
  // Escape special regex characters except : and *
  let regexPattern = pattern.replace(/[.+?^${}()|[\]\\]/g, '\\$&');
  
  // Replace :param with named capture groups
  regexPattern = regexPattern.replace(/:([^\/]+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return '([^/]+)';
  });
  
  // Add anchors for exact matching
  regexPattern = `^${regexPattern}$`;
  
  return {
    regex: new RegExp(regexPattern),
    paramNames
  };
}

/**
 * Match a pathname against a route pattern and extract parameters
 * @param pattern Route pattern like "/user/:userId"
 * @param pathname Actual pathname like "/user/123"
 * @returns Match result with extracted parameters or null if no match
 */
export function matchPath(pattern: string, pathname: string): RouteMatch | null {
  const { regex, paramNames } = pathToRegex(pattern);
  const match = pathname.match(regex);
  
  if (!match) {
    return null;
  }
  
  // Extract parameters from capture groups
  const params: RouteParams = {};
  paramNames.forEach((paramName, index) => {
    params[paramName] = match[index + 1]; // +1 because match[0] is the full match
  });
  
  return {
    path: pattern,
    params,
    isExact: true
  };
}

/**
 * Find the best matching route from a list of route patterns
 * @param routes Array of route patterns
 * @param pathname Current pathname
 * @returns Best match or null if no routes match
 */
export function matchRoutes(routes: string[], pathname: string): RouteMatch | null {
  for (const route of routes) {
    const match = matchPath(route, pathname);
    if (match) {
      return match;
    }
  }
  return null;
}
