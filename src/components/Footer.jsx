import { company } from "../data/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {year} {company.name}. Building ideas that go further.
        </p>
      </div>
    </footer>
  );
}
