require("dotenv").config();

const socketIO = require("socket.io");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_DEV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

mongoose.connection.on("error", (err) => {
  console.log(`Connect to MongoDB error: ${err.message}`);
});

mongoose.connection.once("open", () => {
  console.log(`Connected to MongoDB`); 
});

require("./src/models/User");
require("./src/models/Role");
require("./src/models/Category");
require("./src/models/Shop");
require("./src/models/ShopRequest");
require("./src/models/RefreshToken");

const app = require("./src/app");

const port = process.env.PORT;

const server = app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);
const io = socketIO(server);

io.on("connection", function (socket) {
  console.log("a user connected");
  socket.on("sendMessage", function (msg) {
    console.log("message: " + msg);
    io.emit("newMsg", msg);
  });
  socket.on("disconnect", function () {
    console.log("User Disconnected");
  });
});
