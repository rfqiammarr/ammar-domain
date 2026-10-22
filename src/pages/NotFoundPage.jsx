import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="not-found-page" aria-labelledby="not-found-title">
      <div className="not-found-grid" aria-hidden="true" />
      <div className="container not-found-content">
        <p className="not-found-code">404 / Page not found</p>
        <h1 id="not-found-title">This page took a wrong turn.</h1>
        <p className="not-found-description">The page you&apos;re looking for doesn&apos;t exist.</p>
        <div className="not-found-actions">
          <Link to="/" className="btn primary">
            Back to home
          </Link>
          <Link to="/projects" className="btn">
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
}
