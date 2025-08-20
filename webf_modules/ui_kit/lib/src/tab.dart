/*
 * Copyright (C) 2024-present The OpenWebF Company. All rights reserved.
 * Licensed under GNU AGPL with Enterprise exception.
 */
import 'package:flutter/material.dart';
import 'package:webf/webf.dart';
import 'package:webf/dom.dart' as dom;

class FlutterTabState extends WebFWidgetElementState with TickerProviderStateMixin {
  late final TabController _tabController;

  bool isScrollable = false;
  bool showNextIcon = true;
  bool showBackIcon = true;

  FlutterTabState(super.widgetElement);

  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    _tabController = TabController(length: widgetElement.children.length, vsync: this);
    _tabController.addListener(() {
      if (_tabController.indexIsChanging) {
        widgetElement.dispatchEvent(CustomEvent('tabchange', detail: _tabController.index));
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    final tabs = widgetElement.childNodes.whereType<dom.Element>().map((element) {
      return Tab(text: element.getAttribute('title'));
    }).toList();
    final children = widgetElement.childNodes.whereType<dom.Element>().map((element) {
      return element.toWidget();
    }).toList();

    return Column(
      children: <Widget>[
        TabBar.secondary(
          controller: _tabController,
          tabs: tabs,
        ),
        Expanded(
          child: TabBarView(
            controller: _tabController,
            children: children,
          ),
        ),
      ],
    );
  }
}

class FlutterTab extends WidgetElement {
  FlutterTab(super.context);

  @override
  FlutterTabState? get state => super.state as FlutterTabState?;

  @override
  WebFWidgetElementState createState() {
    return FlutterTabState(this);
  }
}

class FlutterTabItem extends WidgetElement {
  FlutterTabItem(super.context);

  @override
  WebFWidgetElementState createState() {
    return FlutterTabItemState(this);
  }
}

class FlutterTabItemState extends WebFWidgetElementState {
  FlutterTabItemState(super.widgetElement);

  @override
  Widget build(BuildContext context) {
    return WebFHTMLElement(
        tagName: 'DIV',
        parentElement: widgetElement,
        controller: widgetElement.ownerDocument.controller,
        children: widgetElement.childNodes.toWidgetList());
  }
}
