import arms from '..';

const bl = arms('11111', {
  env: 'development',
});
bl.api('api', true, 1);
bl.setPage('new page');
