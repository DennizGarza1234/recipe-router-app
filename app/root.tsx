import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
      </nav>

      <Outlet />
    </div>
  );
}