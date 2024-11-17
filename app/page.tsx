'use client';
import { useState, useEffect } from "react";
import InfoSection from "@/components/InfoSection";
import MovingArrow from "@/components/MovingArrow";
import Image from "next/image";
import whiteFlower from "@/public/images/white-flower.jpg";
import { motion, useTransform, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll(); // Get scroll progress
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.5]); // Scale from 100% to 50%
  const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]); // Fade from 100% to 0%

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolling(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black">
      {/* Image with Framer Motion for scaling and fading */}
      <motion.div
        className="w-full h-screen relative"
        style={{
          opacity: imageOpacity,
          scale: imageScale,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
        }}
      >
        <Image
          src={whiteFlower}
          alt="Lone tree"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </motion.div>
      <MovingArrow fadeOut={isScrolling} />
      <InfoSection />
    </div>
  );
}
