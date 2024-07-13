import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        
        <Link className="btn btn-ghost text-xl" to="/">Home</Link> 
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
         <Link to="/login">Login</Link> 
            
          </li>
          <li>
          <Link to="/register">Register</Link> 
          </li>
        </ul>
      </div>
    </div>
  );
}
