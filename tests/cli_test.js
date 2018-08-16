

var sys = require('../lib/req');
var req = sys.req;
var ink = sys.ink;

var program    = req('commander');
var util      = req('util');

sys.ready('fetjs cli test');

function print(msg) {
  console.log(msg);
}

program
  .version('0.2.0')
  .usage('<device> <instruction> <duration> [options]')
  .option('-d, --debug', 'Debug')
  .option('-s, --sim', "Don't send to serial port, only simulate")
  .parse(process.argv);

if(program.args.length <= 1) program.help();

if (program.sim) {
  print('SIMULATION ONLY');
}
if (program.debug) {
  print('DEBUGGING');
}
// get port name from the command line:
portName  = process.argv[2];
code      = process.argv[3];        
duration  = process.argv[4] * 1000; 


print(util.inspect(program.args, {depth: null}));
