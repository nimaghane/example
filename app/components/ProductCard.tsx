"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  title: string;
  price: number;
  slug: string;
};

export default function ProductCard({ title, price, slug }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 hover:border-white/30"
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      <p className="text-blue-400 mb-4">${price}</p>

      <Link
        href={`/products/${slug}`}
        className="inline-block text-sm text-green-400 hover:text-green-300 transition"
      >
        مشاهده محصول →
      </Link>
    </motion.div>
  );
}
