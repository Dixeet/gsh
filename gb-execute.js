const child = require('node:child_process');

const args = [];
if (process.env.ARGS) {
  process.env.ARGS.split(' ').forEach(arg => {
    args.push('-p');
    args.push(arg);
  });
}

child.fork(process.env.APPDATA + '\\npm\\node_modules\\greybel-js\\bin\\index.js', [
  'execute', process.argv.slice(2).join(' ').trim(), ...args
]);