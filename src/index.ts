const defaultOption: any = {
  env: 'production',
  option: {
    imgUrl: 'https://arms-retcode.aliyuncs.com/r.png?',
  },
};

class Faker {
  static api(..._: any) {}
  static error(..._: any) {}
  static sum(..._: any) {}
  static avg(..._: any) {}
  static setConfig(..._: any) {}
  static setPage(..._: any) {}
}

export default function(pid: string, option: object) {
  // merge option
  const opt = Object.assign({}, defaultOption, option);

  // env
  const env = opt.env;
  if (typeof env === 'string') {
    if (env !== process.env.NODE_ENV) {
      return Faker;
    }
  } else if (Array.isArray(env)) {
    if (env.indexOf(process.env.NODE_ENV) === -1) {
      return Faker;
    }
  } else {
    return Faker;
  }

  // create
  return require('alife-logger').singleton(
    {
      pid,
      ...opt.option,
    },
    opt.prePipe,
  );
}
