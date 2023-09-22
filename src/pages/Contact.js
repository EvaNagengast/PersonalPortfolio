import React from "react";
import { motion } from "framer-motion";
import FishOne from "../media/fishone.png";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="Contact">
      <motion.img
        src={FishOne}
        alt="Fish"
        variants={{
          fishout: { opacity: 0, x: -200 },
          fishin: { opacity: 1, x: 1600 },
        }}
        initial="fishout"
        animate="fishin"
        transition={{ duration: 6, delay: 5 }}
        className="subheader"
      />
    </div>
  );
}
