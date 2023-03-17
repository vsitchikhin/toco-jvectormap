module.exports = {
  skipComponentsWithoutExample: true,
  getExampleFilename: componentPath => componentPath.replace(/\.[jt]sx?$/, '.md'),
  exampleMode: 'expand',
  sections: [
    {
      name: 'jvectormap-next',
      content: 'jvectormap-next/build.sh',
    },
  ],
  styleguideDir: 'docs'
};
