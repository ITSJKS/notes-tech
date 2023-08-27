import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">My NOTES TECH!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Where Productivity Meets Simplicity. Streamline task management with
          role-based controls, empowering every team member, from admins to
          employees. Experience seamless collaboration through integrated
          note-taking, capturing insights and driving progress. Your data's
          security is our priority with advanced JWT authentication. Join us
          today for a new era of efficient work management!
        </p>
        <address className="public__addr">
          NOTES TECH
          <br />
          Ranchi , Jharkhand
          <br />
          <a href="tel:+919999999999">9999999999</a>
        </address>
        <br />
        <p>Owner: Jitesh Singh</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
