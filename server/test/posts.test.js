const axios = require('axios');
const postsService = require('../service/postsService');
const crypto = require('crypto');
const { post } = require('../route/postsRoute');

const generate = function(){
  return crypto.randomBytes(20).toString('hex');
};

const request = function (url, method, data){
  return axios({url, method, data});};
  //jest.setTimeout(80000);


test('Shoul get posts', async function(){
 //jest.setTimeout(80000);

  const post1= await postsService.savePost({ title: generate(), content:generate()})
  const post2= await postsService.savePost({ title: generate(), content:generate()})
  const post3= await postsService.savePost({ title: generate(), content:generate()})

  const response = await request('http://localhost:3000/posts','get');
  const posts = response.data;
  expect(posts).toHaveLength(3);
  await postsService.deletePost(post1.id);
  await postsService.deletePost(post2.id);
  await postsService.deletePost(post3.id);
 // jest.setTimeout(5 * MINUTE)
});


test('Shoul save a post', async function(){
 // jest.setTimeout(70010);

  const data = { title: generate(), content: generate() };
  const response = await request('http://localhost:3000/posts','post', data);
  const post = response.data;
  expect(post.title).toBe(data.title);
  expect(post.content).toBe(data.content);
  await postsService.deletePost(post.id);

});

test('Shoul update a posts', async function(){
  //jest.setTimeout(70010);

  const post = await postsService.savePost({ title: generate(), content:generate()})
  post.title = generate();
  post.content = generate();
  await request(`http://localhost:3000/posts/${post.id}`, 'put', post);
  const updatePost = await postsService.getPosts(post.id);
  expect(updatePost.title).toBe(data.title);
  expect(updatePost.content).toBe(data.content);
  await postsService.deletePost(post.id);

});

test('Shoul delete a posts', async function(){
 // jest.setTimeout(70010);

  const post = await postsService.savePost({ title: generate(), content:generate()})
  await request(`http://localhost:3000/posts/${post.id}`, 'delete');
  const posts = await postsService.getPosts();
  expect(posts).toHaveLength(0);

});