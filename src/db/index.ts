const {MONGODB_CONN} = process.env;
const mongoose = require('mongoose');

mongoose.connect(MONGODB_CONN, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on(
    'error',
    console.error.bind(console, 'connection error:'),
);
mongoose.connection.once('open', function() {
  console.log('connected!');
});

const karmaSchema = new mongoose.Schema({
  guildId: Number,
  userId: Number,
  karma: Number,
});

const quipSchema = new mongoose.Schema({
  guildId: Number,
  quip: String,
});

exports.Karma = mongoose.model('Karma', karmaSchema);
exports.Quip = mongoose.model('Quip', quipSchema);
