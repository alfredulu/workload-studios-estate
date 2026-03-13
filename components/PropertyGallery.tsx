"use client";

import { motion } from "framer-motion";

export default function PropertyGallery({ images }: { images: string[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {images.map((image, index) => (
        <motion.div
          key={`${image}-${index}`}
          whileHover={{ scale: 1.02 }}
          className="relative h-64 overflow-hidden rounded-3xl bg-slate-100 shadow-lg"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </motion.div>
      ))}
    </div>
  );
}
