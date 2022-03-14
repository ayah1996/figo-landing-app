module.exports = {
  plugins: [
    purgecss({
      content: ["./src/**/*.js"],
      // Treat every word in the bundle as a CSS selector
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
