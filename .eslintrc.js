module.exports = {
  "extends": "airbnb",
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
