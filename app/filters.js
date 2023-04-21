const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

const nunjucks  = require('nunjucks');
const env = nunjucks.configure();

env.addGlobal('$environment', () => process.env.NODE_ENV || 'development');
const res = nunjucks.renderString(`{{$environment()}}`);

console.log(res);
