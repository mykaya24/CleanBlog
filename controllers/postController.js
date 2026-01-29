const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  const postList = await Post.find({});
  res.render('index', { postList });
};

exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', { post });
};

exports.createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
};

exports.getPostAddPage = (req, res) => {
  res.render('add_post');
};

exports.getPostEditPage = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('edit', { post });
};

exports.updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.title = req.body.title;
  post.detail = req.body.detail;
  post.save();
  res.redirect(`/posts/${req.params.id}`);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  res.redirect('/');
};
