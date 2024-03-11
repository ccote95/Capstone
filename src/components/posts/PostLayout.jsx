export const PostLayout = ({ post }) => {
  return (
    <div className="post">
      <div className="post-title">
        <h3>{post.title}</h3>
      </div>
      <div className="post-format">{post.format.name}</div>
      <div className="post-date">{post.date}</div>
    </div>
  );
};
