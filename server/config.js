const config = {
  db: {
    production: process.env.MONGODB_URI, // on heroku
    development: 'mongodb://localhost/clientdirectory001',
    test: 'mongodb://localhost/clientdirectory001-test',
  },
};

module.exports = config;
