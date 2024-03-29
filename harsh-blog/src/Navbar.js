import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Harsh Blog</h1>
            <div className="links">
                {/* <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Blog</a> */}
                <Link to ="/">Home</Link>
                <Link to ="/Create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;