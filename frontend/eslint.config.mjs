export default [
  {
    files: ["**/*.js"], // Specify file patterns to apply these settings
    languageOptions: {
      ecmaVersion: 2020, // Ensure ECMAScript 2020 compatibility
      sourceType: "script", // Use 'module' for ESM; 'script' for CommonJS
    },
    env: {
      node: true, // Enable Node.js globals
    },
    rules: {
      // Optional: Turn off warnings about CommonJS usage
      "import/no-commonjs": "off", // If you're using eslint-plugin-import
    },
  },
];
