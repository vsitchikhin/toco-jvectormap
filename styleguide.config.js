module.exports = {
  skipComponentsWithoutExample: true,
  getExampleFilename: componentPath => componentPath.replace(/\.[jt]sx?$/, '.md'),
  compilerConfig: {
    transforms: {
      dangerousTaggedTemplateString: true,
    },
  },
  styleguideDir: 'dist',
  components: '*/src/**/*.{js,jsx,ts,tsx}',
  template: {
    head: {
      raw: `
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500|Material+Icons">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Roboto+Condensed:400,700">
        <noscript id="jss-insertion-point"></noscript>
      `,
    },
  },
};
