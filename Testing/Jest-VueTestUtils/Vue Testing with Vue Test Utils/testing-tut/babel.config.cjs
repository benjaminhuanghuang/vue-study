module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // Target the environments based on the browserslist in package.json or custom configuration
        targets: {
          node: 'current', // Target the current Node.js version for Jest
        },
      },
    ],
  ],
  plugins: [
    // Optional: you can add Babel plugins here if necessary
  ],
};