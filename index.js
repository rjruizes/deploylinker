
const basePath = ""

/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (robot) => {
  robot.on("pull_requests.opened", async (context) => {
    const branchName = context.payload.pull_request.head.ref;

    // create a comment
    const comment = context.pull_request({
      body: basePath + branchName,
    });
    // publish it
    return context.github.pull_requests.createComment(comment);
  });
};
