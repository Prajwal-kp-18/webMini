"use client";
import React, { useState } from "react";

const foodData = [
  // Vegetarian Dishes
  {
    category: "vegetarian",
    name: "Mămăligă",
    image: "/images/mamaliga.jpeg",
    description:
      "A traditional Romanian polenta, often served with cheese and sour cream.",
    location: "Nationwide",
    rating: "4.7/5",
    spiceLevel: "Mild",
  },
  {
    category: "vegetarian",
    name: "Sarmale (Vegetarian Version)",
    image: "/images/sarmale-veg.jpeg",
    description:
      "Cabbage rolls filled with rice, mushrooms, and spices, cooked in a tomato sauce.",
    location: "Nationwide",
    rating: "4.5/5",
    spiceLevel: "Medium",
  },
  {
    category: "vegetarian",
    name: "Zacuscă",
    image: "/images/zacusca.jpg",
    description:
      "A spread made from roasted eggplants, peppers, and tomatoes, often enjoyed on bread.",
    location: "Nationwide",
    rating: "4.6/5",
    spiceLevel: "Mild",
  },
  {
    category: "vegetarian",
    name: "Salată de Vinete",
    image: "/images/salata-de-vinete.jpeg",
    description:
      "A salad made from roasted eggplants mixed with onions and mayonnaise.",
    location: "Nationwide",
    rating: "4.4/5",
    spiceLevel: "None",
  },
  {
    category: "vegetarian",
    name: "Ciorbă de Legume",
    image: "/images/ciorba-de-legume.jpeg",
    description:
      "A hearty vegetable soup, often served with sour cream and fresh herbs.",
    location: "Nationwide",
    rating: "4.5/5",
    spiceLevel: "Mild",
  },
  // Non-Vegetarian Dishes
  {
    category: "non-vegetarian",
    name: "Sarmale (Traditional)",
    image: "/images/sarmale.jpeg",
    description:
      "Cabbage rolls filled with minced meat and rice, cooked in a tomato sauce.",
    location: "Nationwide",
    rating: "4.5/5",
    spiceLevel: "Medium",
  },
  {
    category: "non-vegetarian",
    name: "Ciorbă de Burtă",
    image: "/images/ciorba-de-burta.jpeg",
    description:
      "A sour tripe soup, typically served with sour cream and hot peppers.",
    location: "Nationwide",
    rating: "4.6/5",
    spiceLevel: "Medium",
  },
  {
    category: "non-vegetarian",
    name: "Mici",
    image: "/images/mici.jpeg",
    description:
      "Grilled minced meat rolls, seasoned with spices, often served with mustard and bread.",
    location: "Nationwide",
    rating: "4.8/5",
    spiceLevel: "Medium",
  },
  {
    category: "dessert",
    name: "Papanasi",
    image: "/images/papanasi.jpeg",
    description:
      "A dessert made of fried dough filled with cheese and topped with sour cream and jam.",
    location: "Nationwide",
    rating: "4.9/5",
    spiceLevel: "None",
  },
  {
    category: "dessert",
    name: "Cozonac",
    image: "/images/cozonac.jpeg",
    description:
      "A sweet bread filled with walnuts, cocoa, or poppy seeds, traditionally made for holidays.",
    location: "Nationwide",
    rating: "4.8/5",
    spiceLevel: "None",
  },
  {
    category: "non-vegetarian",
    name: "Pui la Grătar",
    image: "/images/pui-la-gratar.jpeg",
    description:
      "Grilled chicken marinated with herbs and spices, served with a side of vegetables.",
    location: "Nationwide",
    rating: "4.7/5",
    spiceLevel: "Mild",
  },
  {
    category: "non-vegetarian",
    name: "Tocăniță de Porc",
    image: "/images/tocanita-de-porc.jpeg",
    description:
      "A pork stew cooked with vegetables and spices, served with polenta.",
    location: "Nationwide",
    rating: "4.6/5",
    spiceLevel: "Medium",
  },
];

const RomaniaFoods = () => {
  const [filter, setFilter] = useState("all");

  const filteredFoods = foodData.filter((food) => {
    if (filter === "all") return true;
    return food.category === filter;
  });

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-400">
        Romanian Foods
      </h1>
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 mx-2 rounded ${
            filter === "all" ? "bg-red-500 text-white" : " bg-blue-500"
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded ${
            filter === "vegetarian" ? "bg-green-500 text-white" : "bg-blue-500"
          }`}
          onClick={() => setFilter("vegetarian")}
        >
          Vegetarian
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded ${
            filter === "non-vegetarian"
              ? "bg-red-500 text-white"
              : "bg-blue-500"
          }`}
          onClick={() => setFilter("non-vegetarian")}
        >
          Non-Vegetarian
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded ${
            filter === "dessert" ? "bg-yellow-500 text-white" : "bg-blue-500"
          }`}
          onClick={() => setFilter("dessert")}
        >
          Desserts
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFoods.map((food, index) => (
          <div
            key={index}
            className={`border rounded-lg p-4 bg-grey-600 shadow-md transition-transform transform hover:scale-105 ${
              food.category === "vegetarian"
                ? "border-green-500"
                : food.category === "non-vegetarian"
                ? "border-red-500"
                : "border-yellow-500"
            }`}
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-semibold mt-2">{food.name}</h2>
            <p className="text-gray-600">{food.description}</p>
            <p className="mt-2">
              <strong>Location:</strong> {food.location}
            </p>
            <p>
              <strong>Rating:</strong> {food.rating}
            </p>
            <p>
              <strong>Spice Level:</strong> {food.spiceLevel}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RomaniaFoods;
