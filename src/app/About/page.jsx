// pages/about.js

import Head from "next/head";
import Link from "next/link";
import "../globals.css"; // Ensure this path matches your styles directory

export default function About() {
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

      <section className="about ">
        <div className="">
          <div className="flex flex-row justify-center items-center gap-16 ">
            <div className="flex flex-col w-[400px]">
              <h1 className="text-2xl text-blue-600">About Us</h1>
              <p className=" text-white">
                Welcome to Romania Tourism! We are dedicated to providing you
                with the best travel experiences in Romania. Our team is
                passionate about showcasing the beauty, culture, and history of
                this incredible country.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center w-[400px]">
              <h1 className="text-2xl text-blue-600">Our Mission</h1>
              <p className="text-white">
                Our mission is to create unforgettable travel experiences that
                connect you with the rich heritage and stunning landscapes of
                Romania. We strive to offer personalized services that cater to
                your unique travel needs.
              </p>
            </div>
          </div>

          <h1 className="text-blue-600 text-2xl">Our Values</h1>
          <ul className="text-white">
            <li>
              Integrity: We believe in transparency and honesty in all our
              dealings.
            </li>
            <li>
              Customer Focus: Our clients are at the heart of everything we do.
            </li>
            <li>
              Passion: We are passionate about travel and dedicated to sharing
              our love for Romania.
            </li>
            <li>
              Innovation: We continuously seek new ways to enhance your travel
              experience.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
