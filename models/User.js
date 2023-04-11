const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});
userSchema.index({ username: 'text', email: 'text' });

module.exports = mongoose.model('User', UserSchema);

