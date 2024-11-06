"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import "./globals.css";

const images = [
  "/images/behind.jpg",
  "/images/behind2.jpg",
  "/images/behind3.jpg",
  "/images/behind4.jpg",
]; // Add your image paths here

export default function Home() {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      <Head>
        <title>Romania Tourism</title>
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

      <section
        className="banner"
        style={{ backgroundImage: `url(${currentImage})` }}
      >
        <h1>Explore the Beauty of Romania</h1>
      </section>

      <section className="services ">
        <div className="services-box flex justify-center items-center flex-col">
          <h2 className="text-4xl text-white text-center">Our Services</h2>
          <div className="flex flow-row gap-16 ">
            <div className="service">
              <h3 className="text-blue-500 text-xl">Flight Booking</h3>
              <button className="service-button" aria-label="Book a flight">
                Book Now
              </button>
            </div>
            <div className="service">
              <h3 className="text-blue-500 text-xl">Hotel Booking</h3>
              <button className="service-button" aria-label="Book a hotel">
                Book Now
              </button>
            </div>
            <div className="service">
              <h3 className="text-blue-500 text-xl">Tour Packages</h3>
              <button
                className="service-button bg-gray-800"
                aria-label="Explore tour packages"
              >
                Explore Packages
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="destinations">
        <h2>Popular Destinations</h2>
        <div className="destination">
          <h3>Reykjavik</h3>
        </div>
        <div className="destination">
          <h3>Golden Circle</h3>
        </div>
        <div className="destination">
          <h3>Blue Lagoon</h3>
        </div>
      </section> */}
    </div>
  );
}
