 // Generated from template:
 //   code_generator/src/json/templates/element_type_helper.h.tpl
 // and input files:
 //   <%= template_path %>

#ifndef BRIDGE_CORE_HTML_TYPE_HELPER_H_
#define BRIDGE_CORE_HTML_TYPE_HELPER_H_


#include "core/dom/element.h"
#include "html_names.h"

<% _.forEach(data, (item, index) => { %>
  <% if (_.isString(item)) { %>
#include "core/html/html_<%= item %>_element.h"
  <% } else if (_.isObject(item)) { %>
    <% if (item.interfaceHeaderDir) { %>
#include "<%= item.interfaceHeaderDir %>/html_<%= item.filename ? item.filename : item.name  %>_element.h"
    <% } else if (item.interfaceName != 'HTMLElement'){ %>
#include "core/html/<%= item.filename ? item.filename : `html_${item.name}_element` %>.h"
    <% } %>
  <% } %>
<% }); %>

namespace webf {


<% function generateTypeHelperTemplate(name) {
  return `
class HTML${_.upperFirst(name)}Element;
template <>
inline bool IsElementOfType<const HTML${_.upperFirst(name)}Element>(const Node& node) {
 return IsA<HTML${_.upperFirst(name)}Element>(node);
}
template <>
inline bool IsElementOfType<const HTML${_.upperFirst(name)}Element>(const HTMLElement& element) {
 return IsA<HTML${_.upperFirst(name)}Element>(element);
}
template <>
struct DowncastTraits<HTML${_.upperFirst(name)}Element> {
 static bool AllowFrom(const Element& element) {
   return element.HasTagName(html_names::k${name});
 }
 static bool AllowFrom(const Node& node) {
   return node.IsHTMLElement() && IsA<HTML${_.upperFirst(name)}Element>(To<HTMLElement>(node));
 }
 static bool AllowFrom(const EventTarget& event_target) {
    return event_target.IsNode() && To<Node>(event_target).IsHTMLElement() &&
            To<HTMLElement>(event_target).tagName() == html_names::k${ name };
  }
};
`;
} %>

<% _.forEach(data, (item, index) => { %>
  <% if (_.isString(item)) { %>
    <%= generateTypeHelperTemplate(item) %>
  <% } else if (_.isObject(item)) { %>
    <%= generateTypeHelperTemplate(item.name) %>
  <% } %>
<% }) %>

}


#endif
