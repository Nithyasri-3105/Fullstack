import { Link, Outlet } from "react-router-dom";
function Admin() {
    return ( 
        <div>
            <p>Welcome to admin layout</p>
            <nav>
                <Link to={"/admin/dashboard"}>Dashboard</Link>
                <Link to={"/admin/userdetails"}>details</Link>
                <Link to={"/admin/adminsettings"}>settings</Link>
            </nav>
            <Outlet/>
        </div>
     );
}

export default Admin;