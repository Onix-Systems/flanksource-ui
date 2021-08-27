// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true);

  const presets = [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }]
  ];
  const plugins = ["macros", "@babel/plugin-syntax-jsx"];

  return {
    presets,
    plugins
  };
};
