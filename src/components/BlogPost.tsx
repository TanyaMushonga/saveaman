const BlogPost = () => {
  return (
    <div className="border border-solid p-5 md:p-10 rounded-md">
      <div className="w-full h-auto flex justify-between">
        <div className="flex items-center space-x-2 md:space-x-6">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <p className="text-white font-bold text-sm md:text-xl">
            General Luverty
          </p>
        </div>
        <div className="flex items-center md:space-x-5 space-x-2">
          <p className="text-white">19/01/2024</p>
          <p className="text-white">13:55</p>
        </div>
      </div>
      <div className="divider divider-primary"></div>
      <div className="flex justify-start">
        {" "}
        <p className="font-bold text-white">
          Cultural superiority is an illusion
        </p>
      </div>
      <div className="py-5">
        <p className="text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut architecto
          obcaecati suscipit, modi consequuntur reiciendis blanditiis
          praesentium commodi. Culpa dolor libero veniam, dolore cumque eligendi
          illo perferendis magni deleniti inventore? <br /> Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Temporibus iusto quas minima
          nesciunt! Mollitia odio quos beatae at temporibus, vel molestias,
          ullam eveniet modi vero perferendis reiciendis reprehenderit tempore?
          Et dolore ducimus quidem, nostrum fugit sint tempore libero
          consequuntur! Suscipit molestiae fugiat aliquid alias. Molestiae, sunt
          maxime! Quo, unde aut?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
