const Comment = require("../../domain/comment");

async function addComment(req, res) {
  try {
    const { email: userEmail } = req.decodedToken;
    const { content, taskId } = req.body;

    const comment = await Comment.addComment({ content, taskId, userEmail });
    res.status(201).json({ status: "success", comment });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  addComment,
};
