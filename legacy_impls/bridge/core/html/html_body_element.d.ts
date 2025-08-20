import {HTMLElement} from "./html_element";
import {IDLEventHandler, WindowEventHandlers} from "../frame/window_event_handlers";

export interface HTMLBodyElement extends HTMLElement, WindowEventHandlers {
  onblur: IDLEventHandler | null;
  onerror: IDLEventHandler | null;
  onfocus: IDLEventHandler | null;
  onload: IDLEventHandler | null;
  onresize: IDLEventHandler | null;
  onscroll: IDLEventHandler | null;

  new(): void;
}
