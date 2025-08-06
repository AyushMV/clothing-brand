// const mongoose = require('mongoose');

// const mongoURI = 'mongodb://localhost:27017/yourdbname'; // Replace 'yourdbname' with your database name

// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected successfully'))
// .catch((err) => console.error('MongoDB connection error:', err));

// module.exports = mongoose;

const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/yourdbname'; // Replace 'yourdbname' with your database name

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;
