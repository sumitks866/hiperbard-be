const TaskPriority = {
  UNASSIGNED: "Unassigned",
  MINOR: "Minor",
  MEDIUM: "Medium",
  MAJOR: "Major",
  CRITICAL: "Critical",
  BLOCKER: "Blocker",
};

const TaskType = {
  BUG: "Bug",
  IMPROVEMENT: "Improvement",
  TASK: "Task",
  FEATURE: "Feature",
  EPIC: "Epic",
  STORY: "Story",
  REQUEST: "Request",
  DOC: "Doc",
  REPORT: "Report",
};

const TaskStatus = {
  NEW: "New",
  ACCEPTED: "Accepted",
  IN_PROGRESS: "In Progress",
  ON_QA: "On QA",
  DONE: "Done",
  DEFERRED: "Deferred",
  DEVELOPMENT_COMPLETE: "Dev Complete",
  REJECTED: "Rejected",
  VERIFIED: "Verified",
  MR_CREATED: "MR Created",
  MERGED: "Merged",
};

const ActivityType = {
  TASK_CREATED: "task_created",
  ASSIGNEE_ADDED: "assignee_added",
  DESCRIPTION_CHANGED: "description_changed",
  PRIORITY_CHANGED: "priority_changed",
  STATUS_CHANGED: "status_changed",
  RELATED_TASK_ADDED: "related_task_added",
  COMMENT_ADDED: "comment_added",
};

module.exports = {
  TaskPriority,
  TaskStatus,
  TaskType,
  ActivityType,
};
