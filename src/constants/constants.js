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

module.exports = {
  TaskPriority,
  TaskStatus,
  TaskType,
};
