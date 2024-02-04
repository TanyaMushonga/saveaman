const Membership = () => {
  return (
    <form className="space-y-5">
      <div className="form-control ">
        <label className="label">
          <span className="label-text text-white">Your Fullname</span>
        </label>
        <input
          type="text"
          placeholder="Tanyaradzwa T Mushonga"
          className="input input-bordered bg-blue-600 placeholder:text-slate-300"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Your Home Address</span>
        </label>
        <input
          type="text"
          placeholder="14564 Inungu Road Selborn Park Bulawayo"
          className="input input-bordered bg-blue-600 placeholder:text-slate-300"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Your Email Address</span>
        </label>
        <input
          type="email"
          placeholder="tanyaradzwatmushonga@gmail.com"
          className="input input-bordered bg-blue-600 placeholder:text-slate-300"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Your Phone Number</span>
        </label>
        <input
          type="text"
          placeholder="+263 71 238 9290"
          className="input input-bordered bg-blue-600 placeholder:text-slate-300"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Your Date of Birth</span>
        </label>
        <input
          type="date"
          className="input input-bordered bg-blue-600 placeholder:text-slate-300"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Your Gender</span>
        </label>
        <select className="select select-bordered w-full max-w-auto bg-blue-600">
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">
            Explain why do you want to join save a man
          </span>
        </label>
        <textarea
          className="textarea textarea-bordered bg-blue-600 h-56 placeholder:text-slate-300"
          placeholder="I want to join save a man because..."
        ></textarea>
      </div>
      <div className="form-control mt-6">
        <button className="btn bg-blue-900 border-none text-white hover:bg-blue-950">
          Submit your registration
        </button>
      </div>
    </form>
  );
};

export default Membership;
