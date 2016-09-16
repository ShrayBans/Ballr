/**
* Script for merging pull request if the branch name is correct. This script is
* called automatically on a pull request by the .travis.yml file.
*/

const path = require('path');
const GithubApi = require('./util/GithubApi');
const commit = process.env.TRAVIS_COMMIT;
const pull = process.env.TRAVIS_PULL_REQUEST;
const org = 'CodesmithLLC';
const repo = path.dirname(__dirname).split('/').slice(-1)[0];

const github = new GithubApi({ org, token: process.env.MERGE_TOKEN });

github.pullInfo({ repo, pull }, (err, res, body) => {
  if (body.user.login !== body.base.ref) {
    console.log('Must pull to correct branch name. Exiting.');
    process.exit(1);
  }

  github.mergePullRequest({
    repo,
    sha: body.head.sha,
    pull,
    message: `Merging ${commit}`,
  }, (pullErr, pullRes, pullBody) => {
    if (pullErr) throw pullErr;

    if (pullBody && pullBody.merged) {
      console.log('Pull request merged. Exiting.');
      process.exit(0);
    } else {
      console.log('Could not merge for some reason: ', body);
      process.exit(1);
    }
  });
});
