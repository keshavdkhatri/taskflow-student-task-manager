const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // 127.0.0.1 is used instead of localhost to avoid IPv6 resolution issues in Node.js
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
