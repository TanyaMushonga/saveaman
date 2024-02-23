export const Footer = () => {
  return (
    <footer className="footer p-10 bg-blue-950 text-base-content">
      <nav className="text-white">
        <header className="footer-title">Services</header>
        <a className="link link-hover">Awareness</a>
        <a className="link link-hover">Counselling</a>
      </nav>
      <nav className="text-white">
        <header className="footer-title">Movement</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav className="text-white">
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form className="text-white">
        <header className="footer-title">Newsletter</header>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text text-white">
              Enter your email address
            </span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="saveaman@gmail.com"
              className="input input-bordered join-item bg-blue-900"
            />
            <button className="btn bg-blue-800 join-item border-none hover:bg-blue-700  ">
              Subscribe
            </button>
          </div>
          <h1 className="my-10 text-primary">
            <a href={"https://tanya-mushonga.vercel.app/"} target="_blank">
              Tanyaradzwa T Mushonga
            </a>
            developed by{" "}
          </h1>
        </fieldset>
      </form>
    </footer>
  );
};
