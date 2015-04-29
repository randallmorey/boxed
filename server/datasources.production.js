module.exports = {
  "db": {
    "name": "db",
    "connector": "memory"
  },
  "mongodb": {
    "url": process.env.MONGOLAB_URI,
    "name": "mongodb",
    "connector": "mongodb"
  }
};
