"use client";

import Head from "next/head";
import { useState } from "react";
import "../globals.css"; // Ensure this path matches your styles directory

const aboutContent = [
  {
    title: "About Us",
    text: "Welcome to Romania Tourism! We are dedicated to providing you with the best travel experiences in Romania. Our team is passionate about showcasing the beauty, culture, and history of this incredible country.",
  },
  {
    title: "Our Mission",
    text: "Our mission is to create unforgettable travel experiences that connect you with the rich heritage and stunning landscapes of Romania. We strive to offer personalized services that cater to your unique travel needs.",
  },
  {
    title: "Our Values",
    text: "Integrity: We believe in transparency and honesty in all our dealings.\nCustomer Focus: Our clients are at the heart of everything we do.\nPassion: We are passionate about travel and dedicated to sharing our love for Romania.\nInnovation: We continuously seek new ways to enhance your travel experience.",
  },
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextContent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutContent.length);
  };

  const prevContent = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + aboutContent.length) % aboutContent.length
    );
  };

  return (
    <div>
      <Head>
        <title>About Us - Romania Tourism</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="about h-[100vh] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-7xl text-blue-600 mb-10">
            {aboutContent[currentIndex].title}
          </h1>
          <p className="text-white text-4xl mt-10">
            {aboutContent[currentIndex].text}
          </p>

          <div className="flex justify-between w-full mt-4">
            <button
              onClick={prevContent}
              className="text-blue-600 hover:underline"
              disabled={currentIndex === 0}
            >
              Previous
            </button>
            <button
              onClick={nextContent}
              className="text-blue-600 hover:underline"
              disabled={currentIndex === aboutContent.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
