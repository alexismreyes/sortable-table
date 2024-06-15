import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/sortable" className="nav-link">Sortable Table</NavLink></li>
                <li className="nav-item"><NavLink to="/user" className="nav-link">User</NavLink></li>
            </ul>          
        </nav>
      </header>
    </>
  );
};

export default Menu;
