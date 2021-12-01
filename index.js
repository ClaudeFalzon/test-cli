#! /usr/bin/env node 

console.log(process.argv);

const { exec } = require("child_process");

const [message, branchname] = process.argv.slice(2);

if (message && branchname) {
  exec("git add .", (err, stour, stderr) => {
    if (err) {
      throw new Error("something is wrong");
    }
    exec(`git commit -m "${message}"`, (err, stour, stderr) => {
      if (err) {
        throw new Error("something is wrong");
      }

      exec(`git push -u origin ${branchname}`, (err, stour, stderr) => {
        if (err) {
          throw new Error("something is wrong");
        }
      });
    });
  });
} else {
  console.log(
    " please provide 2 arguments. 1st argument is the mssage you want to commit and 2nd argument is the branch name..."
  );
}


/* initliase project first  */