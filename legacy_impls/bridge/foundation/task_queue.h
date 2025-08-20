/*
 * Copyright (C) 2019-2022 The Kraken authors. All rights reserved.
 * Copyright (C) 2022-present The WebF authors. All rights reserved.
 */

#ifndef BRIDGE_TASK_QUEUE_H
#define BRIDGE_TASK_QUEUE_H

#include <mutex>
#include <unordered_map>
#include "ref_counter.h"
#include "ref_ptr.h"

namespace webf {

using Task = void (*)(void*);

class TaskQueue : public fml::RefCountedThreadSafe<TaskQueue> {
 public:
  virtual int32_t registerTask(const Task& task, void* data);
  void dispatchTask(int32_t taskId);
  void flushTask();

 private:
  struct TaskData {
    TaskData(const Task& task, void* data) : task(task), data(data){};
    Task task;
    void* data;
  };

  mutable std::mutex queue_mutex_;
  std::unordered_map<int, TaskData*> m_map;
  int64_t id{0};

  FML_FRIEND_MAKE_REF_COUNTED(TaskQueue);
  FML_FRIEND_REF_COUNTED_THREAD_SAFE(TaskQueue);
};

}  // namespace webf

#endif  // BRIDGE_TASK_QUEUE_H
