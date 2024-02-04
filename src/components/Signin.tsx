const Signin = () => {
  return (
    <form className="space-y-5">
      <div className="form-control">
        <label className="label">
          <span className="label-text text-white">Email Address</span>
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
          <span className="label-text text-white">Enter your password</span>
        </label>
        <input
          type="password"
          className="input input-bordered bg-blue-600 placeholder:text-slate-300"
          placeholder="@Cypher#1029"
          required
        />
      </div>

      <div className="form-control mt-6">
        <button className="btn bg-blue-900 border-none text-white hover:bg-blue-950">
          Sign In
        </button>
      </div>
    </form>
  );
};

export default Signin;
