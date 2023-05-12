// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import ContentArea from '../components/ContentArea';
// import accounts from '../accounts';
// import post_data from '../posts'
// import emojis from '../emojis';
// import Post from "../components/Post"

// jest.mock("../accounts", () => ({
//   getAccount: jest.fn(() => {
//     return {
//       name: "John Doe",
//       profile_picture: "https://example.com/johndoe.jpg",
//     };
//   }),
// }));

// jest.mock("../posts", () => ({
//   getPosts: jest.fn(() => {
//     return [
//       {
//         title: "This is a post title",
//         body: "This is a post body",
//         author: "John Doe",
//         profile_picture: "https://example.com/johndoe.jpg",
//         related_account: "Jane Doe",
//         related_profile_picture: "https://example.com/janedoe.jpg",
//         topic: "Emojis",
//         topic_emoji: "😀",
//       },
//       {
//         title: "This is another post title",
//         body: "This is another post body",
//         author: "Jane Doe",
//         profile_picture: "https://example.com/janedoe.jpg",
//         related_account: "John Doe",
//         related_profile_picture: "https://example.com/johndoe.jpg",
//         topic: "Cats",
//         topic_emoji: "🐱",
//       },
//     ];
//   }),
// }));

// jest.mock("../emojis", () => ({
//   getEmoji: jest.fn(() => {
//     return {
//       name: "😀",
//       description: "A smiling face",
//     };
//   }),
// }));

// jest.mock("../components/Post", () => ({
//     render: jest.fn(props => {
//       return <div>This is a Post with props {JSON.stringify(props)}</div>;
//     }),
//   }));
  


// describe('ContentArea component', () => {
//   it('should render the correct number of posts', () => {
//     const posts = post_data.map(function(post) {
//       post["profile_picture"] = accounts[post.account];
//       post["related_profile_picture"] = accounts[post.related_account];

//       post["topic_emoji"] = emojis[post.topic];

//       return <Post data={post}/>

//     }  );

//     const { getAllByTestId } = render(<ContentArea posts={posts} />);
//     expect(getAllByTestId('post').length).toEqual(posts.length);
//   });

//   it('should render the correct profile picture for each post', () => {
//     const posts = post_data.map(function(post) {
//       post["profile_picture"] = accounts[post.account];
//       post["related_profile_picture"] = accounts[post.related_account];

//       post["topic_emoji"] = emojis[post.topic];

//       return <Post data={post}/>

//     }  );

//     const { getAllByTestId } = render(<ContentArea posts={posts} />);
//     for (const post of posts) {
//       const postElement = getAllByTestId('post')[posts.indexOf(post)];
//       expect(postElement.querySelector('.profile-picture').src).toEqual(accounts[post.account]);
//     }
//   });

//   it('should render the correct related profile picture for each post', () => {
//     const posts = post_data.map(function(post) {
//       post["profile_picture"] = accounts[post.account];
//       post["related_profile_picture"] = accounts[post.related_account];

//       post["topic_emoji"] = emojis[post.topic];

//       return <Post data={post}/>

//     }  );

//     it('should render the correct topic emoji for each post', () => {
//         const posts = post_data.map(function(post) {
//           post["profile_picture"] = accounts[post.account];
//           post["related_profile_picture"] = accounts[post.related_account];
    
//           post["topic_emoji"] = emojis[post.topic];
    
//           return <Post data={post}/>
    
//         }  );
    
//         const { getAllByTestId } = render(<ContentArea posts={posts} />);
//         for (const post of posts) {
//           const postElement = getAllByTestId('post')[posts.indexOf(post)];
//           expect(postElement.querySelector('.topic-emoji').textContent).toEqual(emojis[post.topic]);
//         }
//       });
    
//       it('should render the correct number of posts when the posts prop is null', () => {
//         const posts = null;
    
//         const { getAllByTestId } = render(<ContentArea posts={posts} />);
//         expect(getAllByTestId('post').length).toEqual(0);
//       });
    
//       it('should render the correct number of posts when the posts prop is an empty array', () => {
//         const posts = [];
    
//         const { getAllByTestId } = render(<ContentArea posts={posts} />);
//         expect(getAllByTestId('post').length).toEqual(0);
//       });
//     });
    
// });
