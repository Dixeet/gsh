const child = require('node:child_process');

const args = [];
if (process.env.ARGS) {
  process.env.ARGS.split(' ').forEach(arg => {
    args.push('-p');
    args.push(arg);
  });
}

const params = [];
if (process.env.PARAMS) {
  process.env.PARAMS.split(' ').forEach(p => {
    params.push(p);
  });
}

child.fork(process.env.APPDATA + '\\npm\\node_modules\\greybel-js\\bin\\index.js', [
  'execute',...params, process.argv.slice(2).join(' ').trim(), ...args
]);