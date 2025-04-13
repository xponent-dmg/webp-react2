// const UserPosts = ({ posts }) => {
//   return (
//     <div className="user-posts">
//       <h3>User Posts</h3>
//       <ul>
//         {posts.map((post, index) => (
//           <li key={index}>{post}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserPosts;

const PostsList = ({ articles }) => {
  return (
    <div className="posts-section">
      <h3>Recent Posts</h3>
      <ul>
        {articles.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
