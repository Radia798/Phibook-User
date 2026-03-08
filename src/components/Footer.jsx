
// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-12 mt-20">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
//         <div>
//           <h2 className="font-bold text-xl mb-4">PhiBook</h2>
//           <p className="text-gray-400">Connecting people through moments.</p>
//         </div>

//         <div>
//           <h3 className="font-semibold mb-2">Links</h3>
//           <ul className="space-y-1 text-gray-400">
//             <li><a href="#" className="hover:text-indigo-400">Home</a></li>
//             <li><a href="#" className="hover:text-indigo-400">Buy Premium</a></li>
//             <li><a href="#" className="hover:text-indigo-400">Features</a></li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="font-semibold mb-2">Contact</h3>
//           <ul className="space-y-1 text-gray-400">
//             <li>Email: support@phibook.com</li>
//             <li>Phone: +880 1700 000000</li>
//           </ul>
//         </div>
//       </div>
//       <div className="text-center text-gray-500 mt-8">© {new Date().getFullYear()} PhiBook. All rights reserved.</div>
//     </footer>
//   );
// }

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>PhiBook</h2>
          <p>Connecting people through moments.</p>
        </div>

        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Buy Premium</a></li>
            <li><a href="#">Features</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <ul>
            <li>Email: support@phibook.com</li>
            <li>Phone: +880 1700 000000</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} PhiBook. All rights reserved.
      </div>

    </footer>
  );
}