const defaultOption: any = {
  active: process.env.NODE_ENV === 'production',
  imgUrl: 'https://arms-retcode.aliyuncs.com/r.png?',
};

// faker Bl
class Bl {
  static api(..._: any) {
    debug('api', _);
  }
  static error(..._: any) {
    debug('error', _);
  }
  static sum(..._: any) {
    debug('sum', _);
  }
  static avg(..._: any) {
    debug('avg', _);
  }
  static setConfig(..._: any) {
    debug('setConfig', _);
  }
  static setPage(..._: any) {
    debug('setPage', _);
  }
}

function debug(fn: string, argv?: any[]) {
  console.log(`[arms] ${fn}(${argv.join(', ')})`);
}

export default function(option: object) {
  // merge option
  const { active, prePipe, ...opt } = Object.assign({}, defaultOption, option);

  if (!active) {
    return Bl;
  }

  // create
  return require('alife-logger').singleton(opt, prePipe);
}
