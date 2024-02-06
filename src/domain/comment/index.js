const { ActivityType } = require("../../constants/constants");
const Comment = require("../../database/model/comment");
const { logActivity } = require("../activity");

async function addComment(commentData) {
  if (!commentData.taskId || !commentData.userEmail) {
    throw new Error("Task ID and user Email is required");
  }

  try {
    const newComment = new Comment(commentData);
    const savedComment = await newComment.save();
    const comment = savedComment.toObject();

    logActivity(
      commentData.taskId,
      ActivityType.COMMENT_ADDED,
      comment.userEmail,
      {
        commentId: comment._id,
      }
    );

    return { ...comment, id: comment._id };
  } catch (error) {
    throw error;
  }
}

async function getCommentsForTask(taskId, options) {
  if (!taskId) {
    throw new Error("TaskId is required");
  }

  const { offset, limit } = options;

  try {
    const comments = await Comment.find({ taskId })
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit);
    return comments;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  addComment,
  getCommentsForTask,
};
