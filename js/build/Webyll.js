const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ContentTransformer = require('./ContentTransformer');

function Webyll(options) {
  this.options = Object.assign(
    {
      uriRoot: '/api',
    },
    options,
  );
  ContentTransformer.inputRootPath = this.options.inRootPath;
  ContentTransformer.outputUriRoot = this.options.uriRoot;
  this.recipeIndex = {
    data: [],
    links: {
      self: `${this.options.uriRoot}/recipes.json`,
    },
  };
}

Webyll.prototype.apply = function(compiler) {
  const cwp = new CopyWebpackPlugin(
    [
      {
        from: {glob: '**/!(*.md)', dot: true},
        to: this.options.outRootPath,
      },
      {
        from: '**/*.md',
        to: path.join(
          this.options.outRootPath,
          `${ContentTransformer.outputUriRoot}/[path][name]${
            ContentTransformer.outputUriExtention
          }`,
        ),
        transform: (content, contentPath) => {
          const ct = new ContentTransformer(content, contentPath);
          this.recipeIndex.data.push({
            id: ct.json.data.id,
            title: ct.json.data.title,
            isGlutenFree: ct.json.data.isGlutenFree,
            ingredients: ct.json.data.ingredients,
            links: {
              self: ct.json.links.self,
            },
          });
          return ct.transform();
        },
      },
    ],
    {
      context: this.options.inRootPath,
    },
  );

  cwp.apply(compiler);

  compiler.plugin('emit', (compilation, callback) => {
    this.recipeIndex.data = this.recipeIndex.data.sort(
      (a, b) => (a.title.toLowerCase() <= b.title.toLowerCase() ? -1 : 1),
    );
    const indexString = JSON.stringify(this.recipeIndex);
    compilation.assets[`${this.options.uriRoot}/recipes.json`] = {
      source: () => indexString,
      size: () => indexString.length,
    };
    callback();
  });
};

module.exports = Webyll;
