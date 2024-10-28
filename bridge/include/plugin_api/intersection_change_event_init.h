// Generated by WebF TSDL, don't edit this file directly.
// Generate command: node scripts/generate_binding_code.js
/*
 * Copyright (C) 2022-present The WebF authors. All rights reserved.
 */
#ifndef WEBF_CORE_WEBF_API_PLUGIN_API_INTERSECTION_CHANGE_EVENT_INIT_H_
#define WEBF_CORE_WEBF_API_PLUGIN_API_INTERSECTION_CHANGE_EVENT_INIT_H_
#include <stdint.h>
#include "webf_value.h"
namespace webf {
typedef struct Window Window;
typedef struct WindowPublicMethods WindowPublicMethods;
struct WebFIntersectionChangeEventInit {
  double detail;
  WebFValue<Window, WindowPublicMethods> view;
  double which;
  double intersection_ratio;
};
}  // namespace webf
#endif  // WEBF_CORE_WEBF_API_PLUGIN_API_INTERSECTION_CHANGE_EVENT_INIT_H_