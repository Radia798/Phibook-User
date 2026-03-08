
// import { Link } from "react-router-dom";
// import { useState } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   return (
//     <nav className="bg-white shadow-lg fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold text-indigo-600">PhiBook</Link>

//         <div className="hidden md:flex space-x-8 text-gray-700 font-semibold">
//           <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
//           <Link to="/buy" className="hover:text-indigo-600 transition">Buy Premium</Link>
//           <Link to="#" className="hover:text-indigo-600 transition">Features</Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button onClick={() => setOpen(!open)}>
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
//               viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
//               <path d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden px-6 pb-4 space-y-2 bg-white shadow-lg">
//           <Link to="/" className="block hover:text-indigo-600 transition">Home</Link>
//           <Link to="/buy" className="block hover:text-indigo-600 transition">Buy Premium</Link>
//           <Link to="#" className="block hover:text-indigo-600 transition">Features</Link>
//         </div>
//       )}
//     </nav>
//   );
// }

// import { Link } from "react-router-dom";
// import { useState } from "react";
// import "./Navbar.css";

// export default function Navbar() {

//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="navbar">

//       <div className="navbar-container">

//         <Link to="/" className="navbar-logo">
//           PhiBook
//         </Link>

//         {/* Desktop Menu */}
//         <div className="navbar-links">
//           <Link to="/">Home</Link>
//           <Link to="/buy">Buy Premium</Link>
//           <Link to="#">Features</Link>
//         </div>

//         {/* Mobile Button */}
//         <div className="mobile-button">
//           <button onClick={() => setOpen(!open)}>
//             ☰
//           </button>
//         </div>

//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="mobile-menu">
//           <Link to="/">Home</Link>
//           <Link to="/buy">Buy Premium</Link>
//           <Link to="#">Features</Link>
//         </div>
//       )}

//     </nav>
//   );

  
// }

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token){
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return (
    <nav className="navbar">

      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          PhiBook
        </Link>

        <div className="navbar-links">

          <Link to="/">Home</Link>

            {!loggedIn && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}

          {loggedIn && (
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          )}

        </div>

      </div>

    </nav>
  );
}

