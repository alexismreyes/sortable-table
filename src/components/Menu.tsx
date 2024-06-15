import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <header>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/sortable">Sortable Table</NavLink></li>
                <li><NavLink to="/user">User</NavLink></li>
            </ul>          
        </nav>
      </header>
    </>
  );
};

export default Menu;
