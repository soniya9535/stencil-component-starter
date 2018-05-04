exports.config = {
 namespace: 'mycomponent',
 bundles: [
 { components: ['form-component'] },
  { components: ['form-inputs']},
  { components: ['button-component']},
 ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
