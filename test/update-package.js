/**
* Script for updating package.json with dependencies and scripts from
* assessments-archive. This allows each assessment to share common dependencies
* and npm scripts. Local scripts take precedence over remote scripts copied in.
*/

const fs = require('fs');
const GithubApi = require('./util/GithubApi');
const org = 'CodesmithLLC';
const github = new GithubApi({ org, token: process.env.GITHUB_ACCESS_TOKEN });

github.fileContents({
  path: 'package.json',
  repo: 'assessments-archive',
}, (err, response, body) => {
  const buf = new Buffer(body.content, 'base64');
  const newPackage = JSON.parse(buf);
  const thisPackage = require(`${__dirname}/../package.json`);

  // Assign this repo's deps to the new deps so that this repo's deps take precedence
  Object.assign(newPackage.dependencies, thisPackage.dependencies);
  Object.assign(newPackage.scripts, thisPackage.scripts);

  const filepath = `${__dirname}/../package.json`;

  fs.writeFile(filepath, JSON.stringify(newPackage, null, 2), (writeErr) => {
    if (writeErr) throw writeErr;

    // done
  });
});
