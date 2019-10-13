module.exports = {
  preset: "@testing-library/react-native",
  verbose: true,
  moduleNameMapper: {
    "^styled-components$":
      "<rootDir>/node_modules/styled-components/native/dist/styled-components.native.cjs.js"
  }
};
