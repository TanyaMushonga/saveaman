const SendusAMessage = () => {
  return (
    <div className="md:w-1/2 w-full h-auto">
      <p className="font-tektur font-bold text-sm md:text-xl lg:text-2xl flex justify-center py-5 ">
        Please send us a message
      </p>
      <form className="card-bord" method="POST">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Your Email</span>
            </label>
            <input
              type="email"
              placeholder="tanyaradzwatmushonga@gmail.com"
              className="input input-bordered bg-blue-500 placeholder:text-slate-300"
              required
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Your Phone Number</span>
            </label>
            <input
              type="number"
              placeholder="+263 71 238 9290"
              className="input input-bordered bg-blue-500 placeholder:text-slate-300"
              required
              name="phone"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Your Fullname</span>
            </label>
            <input
              type="text"
              placeholder="Tanyaradzwa T Mushonga"
              className="input input-bordered bg-blue-500 placeholder:text-slate-300"
              required
              name="fullname"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Your Home Address</span>
            </label>
            <input
              type="text"
              placeholder="14564 Inungu Road Selborn Park Bulawayo"
              className="input input-bordered bg-blue-500 placeholder:text-slate-300"
              required
              name="address"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">
              Explain your issue in detail
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered bg-blue-500 h-56 placeholder:text-slate-300"
            placeholder="Tell us a in detail about your issue"
            required
            name="message"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-900 border-none text-white hover:bg-blue-950">
            Submit your message
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendusAMessage;
