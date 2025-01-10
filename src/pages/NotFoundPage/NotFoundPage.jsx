import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={css.notFoundContainer}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for doesn&apos;t exist.</p>
      <Link to="/" className={css.link}>
        Go back to the Home Page
      </Link>
    </div>
  );
}

export default NotFoundPage;