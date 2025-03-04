"use client";

import { motion } from "framer-motion";

const items = [
  { id: 1, title: "200+", subtitle: "Businesses Served", color: "bg-blue-500" },
  { id: 2, title: "500+", subtitle: "Client Satisfied", color: "bg-green-500" },
  { id: 3, title: "Redefine", subtitle: "Experiences", color: "bg-red-500" },
  { id: 4, name: "Usman Javed", role: "Marketing Manager", color: "bg-red-400" },
  { id: 5, name: "Nathan Cole", role: "Product Designer", color: "bg-blue-400" },
  { id: 6, name: "Ethan Carter", role: "Software Engineer", color: "bg-blue-500" },
  { id: 7, name: "Amira Al-Nuaimi", role: "Fashion Designer", color: "bg-green-500" },
  { id: 8, name: "Olivia Hayes", role: "Content Strategist", color: "bg-red-400" },
];

const MasonryGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className={`p-4 rounded-xl shadow-lg text-white ${item.color}`}
        >
          <h3 className="text-xl font-bold">{item.title || item.name}</h3>
          <p className="text-sm">{item.subtitle || item.role}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default MasonryGrid;
