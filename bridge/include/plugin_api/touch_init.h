// Generated by WebF TSDL, don't edit this file directly.
// Generate command: node scripts/generate_binding_code.js
/*
 * Copyright (C) 2022-present The WebF authors. All rights reserved.
 */
#ifndef WEBF_CORE_WEBF_API_PLUGIN_API_TOUCH_INIT_H_
#define WEBF_CORE_WEBF_API_PLUGIN_API_TOUCH_INIT_H_
#include <stdint.h>
#include "webf_value.h"
namespace webf {
typedef struct EventTarget EventTarget;
typedef struct EventTargetPublicMethods EventTargetPublicMethods;
struct WebFTouchInit {
  double identifier;
  WebFValue<EventTarget, EventTargetPublicMethods> target;
  double client_x;
  double client_y;
  double screen_x;
  double screen_y;
  double page_x;
  double page_y;
  double radius_x;
  double radius_y;
  double rotation_angle;
  double force;
};
}  // namespace webf
#endif // WEBF_CORE_WEBF_API_PLUGIN_API_TOUCH_INIT_H_