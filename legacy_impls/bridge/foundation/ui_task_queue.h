/*
 * Copyright (C) 2019-2022 The Kraken authors. All rights reserved.
 * Copyright (C) 2022-present The WebF authors. All rights reserved.
 */

#ifndef BRIDGE_UI_TASK_QUEUE_H
#define BRIDGE_UI_TASK_QUEUE_H

#include "task_queue.h"

namespace webf {

class UITaskQueue : public TaskQueue {
 public:
  static fml::RefPtr<UITaskQueue> instance(int32_t contextId) {
    std::lock_guard<std::mutex> guard(ui_task_creation_mutex_);
    if (!instance_) {
      instance_ = fml::MakeRefCounted<UITaskQueue>();
      instance_->m_contextId = contextId;
    }
    return instance_;
  };
  int32_t registerTask(const Task& task, void* data);

 private:
  static std::mutex ui_task_creation_mutex_;
  static fml::RefPtr<UITaskQueue> instance_;
  int m_contextId;
};

}  // namespace webf

#endif  // BRIDGE_UI_TASK_QUEUE_H
