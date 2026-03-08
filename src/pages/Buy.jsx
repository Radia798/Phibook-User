import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import api from "../api/axios";

export default function Buy() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await api.post("create-order/", form);
    alert("Order Created! ID: " + response.data.order_id);
  } catch  {
    alert("Something went wrong.");
  }
};

  return (
    <div>
      <Navbar />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-md mx-auto shadow-xl p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Complete Your Order
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full border p-3 rounded"
              required
            />
            <input
              name="address"
              placeholder="Address"
              onChange={handleChange}
              className="w-full border p-3 rounded"
              required
            />
            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full border p-3 rounded"
              required
            />

            <button className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition">
              Proceed to Payment
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}