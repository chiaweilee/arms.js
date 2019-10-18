const defaultOption: any = {
  active: process.env.NODE_ENV === 'production',
  imgUrl: 'https://arms-retcode.aliyuncs.com/r.png?',
};

// faker Bl
class Bl {
  static api(..._: any) {}
  static error(..._: any) {}
  static sum(..._: any) {}
  static avg(..._: any) {}
  static setConfig(..._: any) {}
  static setPage(..._: any) {}
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
