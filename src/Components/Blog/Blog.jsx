import PropTypes from "prop-types";

const Blogs = (blog) => {
  console.log(blog);

  return (
    <div>
      <h1></h1>
    </div>
  );
};

Blogs.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blogs;
