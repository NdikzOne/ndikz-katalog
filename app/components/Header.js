'use client';

import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-sm sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-primary"
          >
            Katalog Pakaian
          </motion.div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            {['Beranda', 'Koleksi', 'Tentang', 'Kontak'].map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ scale: 1.1, color: '#2563EB' }}
                className="text-gray-600 hover:text-primary font-medium transition-colors duration-300"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Lihat Koleksi
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}