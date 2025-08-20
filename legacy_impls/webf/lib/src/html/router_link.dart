/*
 * Copyright (C) 2022-present The WebF authors. All rights reserved.
 */

import 'package:flutter/widgets.dart';
import 'package:webf/dom.dart' as dom;
import 'package:webf/widget.dart';

const ROUTER_LINK = 'WEBF-ROUTER-LINK';

class RouterLinkElement extends WidgetElement {
  RouterLinkElement(super.context);

  @override
  bool isRouterLinkElement = true;

  String _path = '';

  @override
  void setAttribute(String key, String value) {
    super.setAttribute(key, value);

    if (key == 'path') {
      _path = value;
    }
  }

  List<dom.Node> cachedChildNodes = [];

  @override
  void attachWidget(Widget widget) {
    if (isRouterLinkElement && _path.isNotEmpty) {
      ownerView.setHybridRouterView(_path, widget);
      for(var node in childNodes) {
        cachedChildNodes.add(node);
      }

      cachedChildNodes.forEach((node) {
        removeChild(node);
      });
    } else {
      super.attachWidget(widget);
    }
  }

  @override
  void dispose() {
    super.dispose();
    cachedChildNodes.clear();
  }

  @override
  void detachWidget() {
    if (isRouterLinkElement && _path.isNotEmpty) {
      ownerView.removeHybridRouterView(_path);
    } else {
      super.detachWidget();
    }
  }

  @override
  void reactiveRenderer() {
    // Override default behavior to avoid reattach.
  }

  @override
  Widget build(BuildContext context, List<Widget> children) {
    return WebFHTMLElement(tagName: 'HTML', children: children, inlineStyle: {
      'overflow': 'auto',
      'position': 'relative'
    });
  }
}
