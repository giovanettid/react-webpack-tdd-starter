module.exports = {
  "extends": "airbnb",
  "globals": {
    "document": false
  },
  "plugins": [
    "import"
  ],
  settings: {
    "import/resolver": {
      "node" : {
        "moduleDirectory": ["node_modules", "src", "test/unit", "test/e2e"]
      }
    }
  }
};
