'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: "Blazer Modern",
    description: "Blazer elegan dengan bahan premium untuk penampilan profesional",
    price: "Rp 899.000",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Dress Minimalis",
    description: "Gaun sederhana namun elegan untuk berbagai kesempatan",
    price: "Rp 659.000",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Kemeja Casual",
    description: "Kemeja nyaman dengan desain modern untuk aktivitas sehari-hari",
    price: "Rp 459.000",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    name: "Celana Chino",
    description: "Celana chino klasik dengan sentuhan kontemporer",
    price: "Rp 549.000",
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    name: "Jaket Kulit",
    description: "Jaket kulit asli dengan desain timeless dan durable",
    price: "Rp 1.299.000",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 6,
    name: "Setelan Formal",
    description: "Setelan lengkap untuk acara formal dan bisnis",
    price: "Rp 1.599.000",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

export default function ProductGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Koleksi Terbaru
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Jelajahi pilihan terbaik dari koleksi pakaian modern kami
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="card-hover bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
                  >
                    Beli
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}