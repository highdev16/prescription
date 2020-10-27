module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: false
      }
    ],
    'vue'
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    'transform-imports'
  ]
};
