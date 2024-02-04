import BlogPost from "../components/BlogPost";

const Blog = () => {
  return (
    <div className="min-h-screen bg-blue-600 flex-col justify-center pb-10">
      <div className="w-full h-screen flex justify-center md:p-5 ">
        <div className="md:w-3/4 lg:w-2/3 w-full h-screen bg-blue-700 rounded-sm shadow-transparent p-3 md:p-5 space-y-10 overflow-auto">
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </div>
      </div>
    </div>
  );
};

export default Blog;
