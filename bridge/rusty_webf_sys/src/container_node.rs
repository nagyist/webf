/*
* Copyright (C) 2022-present The WebF authors. All rights reserved.
*/

use std::ffi::c_double;
use crate::document::{Document, DocumentRustMethods};
use crate::event_target::{AddEventListenerOptions, EventListenerCallback, EventTargetMethods, EventTargetRustMethods, RustMethods};
use crate::exception_state::ExceptionState;
use crate::executing_context::ExecutingContext;
use crate::node::{Node, NodeMethods, NodeRustMethods};
use crate::OpaquePtr;

#[repr(C)]
pub struct ContainerNodeRustMethods {
  pub version: c_double,
  pub node: *const NodeRustMethods,
}

impl RustMethods for ContainerNodeRustMethods {}

pub struct ContainerNode {
  pub node: Node,
  method_pointer: *const ContainerNodeRustMethods,
}

impl ContainerNode {

}

pub trait ContainerNodeMethods : NodeMethods {
}

impl NodeMethods for ContainerNode {
  fn append_child<T: NodeMethods>(&self, new_node: &T, exception_state: &ExceptionState) -> Result<T, String> {
    self.node.append_child(new_node, exception_state)
  }

  fn remove_child<T: NodeMethods>(&self, target_node: &T, exception_state: &ExceptionState) -> Result<T, String> {
    self.node.remove_child(target_node, exception_state)
  }

  fn as_node(&self) -> &Node {
    &self.node
  }
}

impl EventTargetMethods for ContainerNode {
  /// Initialize the instance from cpp raw pointer.
  fn initialize<T>(ptr: *const OpaquePtr, context: *const ExecutingContext, method_pointer: *const T) -> Self where Self: Sized {
    unsafe {
      ContainerNode {
        node: Node::initialize(ptr, context, (method_pointer as *const ContainerNodeRustMethods).as_ref().unwrap().node),
        method_pointer: method_pointer as *const ContainerNodeRustMethods
      }
    }
  }

  fn ptr(&self) -> *const OpaquePtr {
    self.node.ptr()
  }

  fn add_event_listener(&self,
                        event_name: &str,
                        callback: EventListenerCallback,
                        options: &AddEventListenerOptions,
                        exception_state: &ExceptionState) -> Result<(), String> {
    self.node.add_event_listener(event_name, callback, options, exception_state)
  }

  fn remove_event_listener(&self,
                           event_name: &str,
                           callback: EventListenerCallback,
                           exception_state: &ExceptionState) -> Result<(), String> {
    self.node.remove_event_listener(event_name, callback, exception_state)
  }
}

impl ContainerNodeMethods for ContainerNode {}
