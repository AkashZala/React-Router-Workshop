const Posts = ({ posts }) => {
  return(
    <div>
      <h1>Posts</h1>
      <ul>
        {
          posts.map(post => {
            return(
              <li key={ post.id }>
                { post.title }
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Posts
