module.exports = {
  "transfrom": {
    "^.+\\.(js|jsx|mjs)$": "babel-jest",
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  "transfromIgnorePatterns": [
    "/node_modules/(?!(xxxx.*?\\.js$))"
  ],
  "testRegex": "(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  "testPathIgnorePatterns": [
    "/node_modules/"
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "json"
  ],
  moduleNameMapper: {
    "^~/(.+)$": "<rootDir>/$1",
    "^@/(.+)$": "<rootDir>/$1"
  },
};