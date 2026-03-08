
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import "./Home.css";
// import { useEffect, useState } from "react";
// import api from "../api/axios";
// import { FaUsers, FaPhotoVideo, FaShieldAlt } from "react-icons/fa";

// export default function Home() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     api.get("posts/")
//       .then(res => setPosts(res.data))
//       .catch(() => console.log("Backend not connected"));
//   }, []);

//   return (
//     <div className="font-sans text-gray-800">
//       <Navbar />
//       <main className="pt-24">

//         {/* HERO */}
//         <section className="hero">
//           <div className="max-w-3xl space-y-6">
//             <h1 className="text-5xl md:text-6xl font-bold">Welcome to PhiBook</h1>
//             <p className="text-lg md:text-2xl">Share moments, connect with friends, and explore memories in a new way.</p>
//             <a href="#features" className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition inline-block">Get Started</a>
//           </div>
//         </section>

//         {/* FEATURES */}
//         <section id="features" className="features">
//           <div className="max-w-6xl mx-auto text-center">
//             <h2 className="text-4xl font-bold mb-12">Features</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//               <div className="p-6 bg-white rounded-2xl shadow-lg space-y-4 hover:scale-105 transition">
//                 <FaShieldAlt className="text-indigo-600 text-4xl mx-auto"/>
//                 <h3 className="text-xl font-semibold">Secure Accounts</h3>
//                 <p>All accounts are verified with email and secure authentication.</p>
//               </div>
//               <div className="p-6 bg-white rounded-2xl shadow-lg space-y-4 hover:scale-105 transition">
//                 <FaUsers className="text-indigo-600 text-4xl mx-auto"/>
//                 <h3 className="text-xl font-semibold">Engage</h3>
//                 <p>Like, comment, and interact with your friends’ posts.</p>
//               </div>
//               <div className="p-6 bg-white rounded-2xl shadow-lg space-y-4 hover:scale-105 transition">
//                 <FaPhotoVideo className="text-indigo-600 text-4xl mx-auto"/>
//                 <h3 className="text-xl font-semibold">Share Media</h3>
//                 <p>Upload photos and videos to share your special moments.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* POPULAR POSTS */}
//         <section className="posts">
//           <div className="max-w-6xl mx-auto text-center mb-12">
//             <h2 className="text-4xl font-bold">Popular Posts</h2>
//             <p className="text-gray-600 mt-2">See what your friends are sharing</p>
//           </div>
//           <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
//             {posts.length > 0 ? posts.map((post)=>(
//               <div key={post.id} className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
//                 <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
//                 <p className="text-gray-600 text-sm">{post.content}</p>
//               </div>
//             )) : <p className="col-span-3 text-center text-gray-500">No posts yet</p>}
//           </div>
//         </section>

//         {/* TESTIMONIALS */}
//         <section className="testimonials">
//           <h2 className="text-4xl font-bold mb-12">What Users Say</h2>
//           <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="p-8 bg-white rounded-2xl shadow-lg hover:scale-105 transition">
//               <p>PhiBook has changed how I connect with friends and family!</p>
//               <h4 className="mt-4 font-semibold">— User A</h4>
//             </div>
//             <div className="p-8 bg-white rounded-2xl shadow-lg hover:scale-105 transition">
//               <p>The clean interface and smooth design make it fun to use</p>
//               <h4 className="mt-4 font-semibold">— User B</h4>
//             </div>
//           </div>
//         </section>

//         {/* PREMIUM / BUY */}
//         <section className="premium">
//           <h2 className="text-4xl font-bold mb-6">Premium Membership</h2>
//           <p className="text-gray-600 mb-12">Unlock exclusive features and promotions.</p>
//           <div className="max-w-md mx-auto bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-10 rounded-3xl shadow-xl hover:scale-105 transition">
//             <h3 className="text-2xl font-bold mb-4">৳499 / month</h3>
//             <a href="/buy" className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:scale-105 inline-block">Buy Now</a>
//           </div>
//         </section>

//         {/* FUTURE MONETIZATION PLACEHOLDER */}
//         <section className="future">
//           <h2 className="text-4xl font-bold mb-6">Future Monetization</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Our system is designed to support paid promotions and premium memberships in future updates.
//           </p>
//         </section>

//       </main>
//       <Footer />
//     </div>
//   );
// }

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import api from "../api/axios";
import { FaUsers, FaPhotoVideo, FaShieldAlt } from "react-icons/fa";
import "./Home.css";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("posts/")
      .then(res => setPosts(res.data))
      .catch(() => console.log("Backend not connected"));
  }, []);

  return (
    <div className="home-container">
      <Navbar />

      <main>

        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to PhiBook</h1>
            <p>
              Share moments, connect with friends, and explore memories in a new way.
            </p>
            <a href="#features">Get Started</a>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="features">
          <h2>Features</h2>

          <div className="features-grid">

            <div className="feature-card">
              <FaShieldAlt className="feature-icon"/>
              <h3>Secure Accounts</h3>
              <p>
                All accounts are verified with email and secure authentication.
              </p>
            </div>

            <div className="feature-card">
              <FaUsers className="feature-icon"/>
              <h3>Engage</h3>
              <p>
                Like, comment, and interact with your friends’ posts.
              </p>
            </div>

            <div className="feature-card">
              <FaPhotoVideo className="feature-icon"/>
              <h3>Share Media</h3>
              <p>
                Upload photos and videos to share your special moments.
              </p>
            </div>

          </div>
        </section>

        {/* POPULAR POSTS */}
        {<section className="posts">
  <h2>Popular Posts</h2>
  <p>See what your friends are sharing</p>

  <div className="posts-grid">
    {posts.length > 0 ? (
      posts.map((post) => (
        <div key={post.id} className="post-card">
          {/* Use user and text, not title */}
          <h3>{post.user}s Post</h3>
          <p>{post.text}</p>
          <p>Likes: {post.likes_count}</p>
        </div>
      ))
    ) : (
      <p>No posts yet</p>
    )}
  </div>
</section>}
        

        {/* TESTIMONIALS */}
        <section className="testimonials">

          <h2>What Users Say</h2>

          <div className="testimonial-grid">

            <div className="testimonial-card">
              <p>
                PhiBook has changed how I connect with friends and family!
              </p>
              <h4>— User A</h4>
            </div>

            <div className="testimonial-card">
              <p>
                The clean interface and smooth design make it fun to use.
              </p>
              <h4>— User B</h4>
            </div>

          </div>

        </section>

        {/* PREMIUM */}
        <section className="premium">

          <h2>Premium Membership</h2>
          <p>Unlock exclusive features and promotions.</p>

          <div className="premium-card">
            <h3>৳499 / month</h3>
            <a href="/buy">Buy Now</a>
          </div>

        </section>

        {/* FUTURE */}
        <section className="future">

          <h2>Future Monetization</h2>

          <p>
            Our system is designed to support paid promotions and premium
            memberships in future updates.
          </p>

        </section>

      </main>

      <Footer />
    </div>
  );
}