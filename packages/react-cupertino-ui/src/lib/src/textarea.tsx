import React from "react";
import { createWebFComponent, WebFElementWithMethods } from "@openwebf/react-core-ui";
interface FlutterCupertinoTextareaMethods {
  focus(): void;
  blur(): void;
  clear(): void;
}
export interface FlutterCupertinoTextareaProps {
  /**
   * val property
   * @default undefined
   */
  val?: string;
  /**
   * placeholder property
   * @default undefined
   */
  placeholder?: string;
  /**
   * disabled property
   * @default undefined
   */
  disabled?: boolean;
  /**
   * readonly property
   * @default undefined
   */
  readonly?: boolean;
  /**
   * maxLength property
   * @default undefined
   */
  maxLength?: number;
  /**
   * rows property
   * @default undefined
   */
  rows?: number;
  /**
   * showCount property
   * @default undefined
   */
  showCount?: boolean;
  /**
   * autoSize property
   * @default undefined
   */
  autoSize?: boolean;
  /**
   * transparent property
   * @default undefined
   */
  transparent?: boolean;
  /**
   * input event handler
   */
  onInput?: (event: CustomEvent<string>) => void;
  /**
   * complete event handler
   */
  onComplete?: (event: Event) => void;
  /**
   * HTML id attribute
   */
  id?: string;
  /**
   * Additional CSS styles
   */
  style?: React.CSSProperties;
  /**
   * Children elements
   */
  children?: React.ReactNode;
  /**
   * Additional CSS class names
   */
  className?: string;
}
/**
 * Element interface with methods accessible via ref
 * @example
 * ```tsx
 * const ref = useRef<FlutterCupertinoTextareaElement>(null);
 * // Call methods on the element
 * ref.current?.finishRefresh('success');
 * ```
 */
export interface FlutterCupertinoTextareaElement extends WebFElementWithMethods<{
  focus(): void;
  blur(): void;
  clear(): void;
}> {}
/**
 * FlutterCupertinoTextarea - WebF FlutterCupertinoTextarea component
 * 
 * @example
 * ```tsx
 * const ref = useRef<FlutterCupertinoTextareaElement>(null);
 * 
 * <FlutterCupertinoTextarea
 *   ref={ref}
 *   // Add props here
 * >
 *   Content
 * </FlutterCupertinoTextarea>
 * 
 * // Call methods on the element
 * ref.current?.finishRefresh('success');
 * ```
 */
export const FlutterCupertinoTextarea = createWebFComponent<FlutterCupertinoTextareaElement, FlutterCupertinoTextareaProps>({
  tagName: 'flutter-cupertino-textarea',
  displayName: 'FlutterCupertinoTextarea',
  // Map props to attributes
  attributeProps: [
    'val',
    'placeholder',
    'disabled',
    'readonly',
    'maxLength',
    'rows',
    'showCount',
    'autoSize',
    'transparent',
  ],
  // Convert prop names to attribute names if needed
  attributeMap: {
    maxLength: 'max-length',
    showCount: 'show-count',
    autoSize: 'auto-size',
  },
  // Event handlers
  events: [
    {
      propName: 'onInput',
      eventName: 'input',
      handler: (callback) => (event) => {
        callback((event as CustomEvent<string>));
      },
    },
    {
      propName: 'onComplete',
      eventName: 'complete',
      handler: (callback) => (event) => {
        callback((event as Event));
      },
    },
  ],
  // Default prop values
  defaultProps: {
    // Add default values here
  },
});