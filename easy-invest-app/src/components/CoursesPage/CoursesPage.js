import { Outlet, Link } from "react-router-dom";

function CoursesPage() {
    return (
      <div className="App">
        <nav>
        <Link className="link" to="services">
          Services
        </Link>
        <Link className="link" to="our-mission">
          Our Mission
        </Link>
      </nav>
      </div>
    );
  }
  
  export default CoursesPage;