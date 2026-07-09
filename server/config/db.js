const mongoose = require("mongoose");
const dns = require("dns");

// Force Node.js to use Google DNS
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");

const conn = await mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 10000,
});
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB Connection Failed");
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;