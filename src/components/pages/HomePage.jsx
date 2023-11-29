import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="container">
        <Link to="loi-normale">
          <div className="title">Table de Loi Normale Centrée Réduite</div>
        </Link>
        <Link to="loi-du-student">
          <div className="title">Table de Loi du Student</div>
        </Link>
        <Link to="loi-khi-deux">
          <div className="title">Table de Loi du Khi Deux</div>
        </Link>
      </div>
    </div>
  )
}