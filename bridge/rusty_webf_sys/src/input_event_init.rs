// Generated by WebF TSDL, don't edit this file directly.
// Generate command: node scripts/generate_binding_code.js
/*
* Copyright (C) 2022-present The WebF authors. All rights reserved.
*/
use std::ffi::*;
use crate::*;
#[repr(C)]
pub struct InputEventInit {
  pub detail: c_double,
  pub view: RustValue<WindowRustMethods>,
  pub which: c_double,
  pub input_type: *const c_char,
  pub data: *const c_char,
}
