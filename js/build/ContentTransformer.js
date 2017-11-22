const yaml = require('js-yaml');
const {markdown} = require('markdown');

function ContentTransformer(inputBuffer, inputPath) {
  const inputString = inputBuffer.toString();
  const id = inputPath
    .replace(new RegExp(`^${ContentTransformer.inputRootPath}/`), '')
    .replace(/\.[^/.]+$/, '');

  this.output = {
    id,
    uri: `${ContentTransformer.outputUriRoot}/${id}${
      ContentTransformer.outputUriExtention
    }`,
    attributes: null,
  };

  const end = inputString.search(/(\n|\r)---(\n|\r)/);
  if (/^---(\n|\r)/.test(inputString) && end !== -1) {
    this.output.content = markdown.toHTML(inputString.slice(end + 5));
    this.output.attributes = yaml.safeLoad(inputString.slice(4, end + 1), {
      json: true,
    });
  } else {
    this.output.content = markdown.toHTML(inputString);
  }

  this.json = this.produceJson();
}

ContentTransformer.prototype.produceJson = function() {
  return {
    data: Object.assign({}, this.output.attributes, {
      id: this.output.id,
      content: this.output.content,
    }),
    links: {
      self: this.output.uri,
    },
  };
};

ContentTransformer.prototype.transform = function() {
  return Buffer.from(JSON.stringify(this.json));
};

ContentTransformer.inputRootPath = __dirname;
ContentTransformer.outputUriRoot = '/api';
ContentTransformer.outputUriExtention = '.json';

ContentTransformer.transform = function(inputBuffer, inputPath) {
  return new ContentTransformer(inputBuffer, inputPath).transform();
};

module.exports = ContentTransformer;
