const express = require('express');
const http = require('http');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const cloudinary = require('cloudinary');

const favicon = require('serve-favicon');

const app = express();
const server = http.createServer(app);

dotenv.config({ path: path.join(__dirname, ".env") });

const PORT = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/teamfluencer";

const indexRouteController = require('./routes/indexRouteController');
const apiRouteController = require('./routes/apiRouteController');

const {
  SESSION_SECRET,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET
} = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  auto_reconnect: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

const session = expressSession({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
});

app.use(session);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.cloudinary = cloudinary;
  next();
});

app.use('/', indexRouteController);
app.use('/api', apiRouteController);

server.listen(PORT, () => {
  console.log(`Server is on port ${PORT}`);
});
