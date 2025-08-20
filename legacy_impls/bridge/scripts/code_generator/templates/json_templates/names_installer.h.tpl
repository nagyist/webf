// Generated from template:
//   code_generator/src/json/templates/names_installer.h.tmpl


#ifndef <%= _.snakeCase(name).toUpperCase() %>_H_
#define <%= _.snakeCase(name).toUpperCase() %>_H_

#include "bindings/qjs/atomic_string.h"

namespace webf {
namespace <%= name %> {

void Init(JSContext* ctx);
void Dispose();

}

} // webf

#endif  // #define <%= _.snakeCase(name).toUpperCase() %>
