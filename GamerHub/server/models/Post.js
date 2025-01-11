const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['text', 'image', 'video', 'achievement', 'stream'],
    default: 'text'
  },
  content: {
    type: String,
    required: true
  },
  game: {
    type: String,
    required: true
  },
  media: [{
    type: String,
    url: String
  }],
  achievement: {
    name: String,
    description: String,
    icon: String
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    text: String,
    likes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    date: {
      type: Date,
      default: Date.now
    }
  }],
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group'
  },
  tags: [String]
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema); 