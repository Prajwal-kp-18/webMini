"use client";
import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamically import the MapComponent without SSR
const RomaniaMap = dynamic(() => import("../../../components/MapComponent"), {
  ssr: false,
});

// Define the Page component
const Page = () => {
  const touristPlaces = [
    {
      id: 1,
      name: "Bran Castle",
      imageUrl: "/images/bran.jpg",
      description: "A historic fortress located in the heart of Transylvania.",
    },
    {
      id: 2,
      name: "Peles Castle",
      imageUrl: "/images/peles-castle.jpg",
      description: "A former royal residence in the Carpathian Mountains.",
    },
    {
      id: 3,
      name: "Sighisoara",
      imageUrl: "/images/sighisoara.jpg",
      description: "A medieval citadel and birthplace of Vlad the Impaler.",
    },
    {
      id: 4,
      name: "Transfagarasan Highway",
      imageUrl: "/images/transfagarasan.jpg",
      description:
        "One of the most scenic roads in the world, crossing the Fagaras Mountains.",
    },
    {
      id: 5,
      name: "Danube Delta",
      imageUrl: "/images/danube-delta.jpg",
      description:
        "A UNESCO World Heritage site known for its rich biodiversity.",
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <div className="m-6">
        <h1 className="text-5xl font-bold mb-4 text-center text-blue-400">
          Explore Romania
        </h1>
        <p className="text-gray-300 ml-10 mr-10 text-center">
          Discover Romania's most captivating destinations, from the hauntingly
          beautiful Bran Castle to the scenic Transfagarasan Highway. Immerse
          yourself in the medieval charm of Sighisoara and the architectural
          wonders of Peles Castle. Venture into the wild beauty of the Danube
          Delta, a UNESCO World Heritage site known for its rich biodiversity.
          Every location offers a unique glimpse into Romania's vibrant culture
          and history.
        </p>
      </div>
      <div className="flex flex-row flex-1 m-4 gap-16">
        <div className="w-1/2 p-4 bg-gray-800 rounded-lg shadow-lg h-full overflow-y-auto max-h-[calc(100vh-200px)]">
          <h2 className="text-3xl text-center font-semibold mb-4 text-blue-400">
            Dashboard
          </h2>
          <div className="space-y-4">
            {touristPlaces.map((place) => (
              <Link key={place.id} href={`/${place.id}`}>
                <div className="flex items-center p-4 rounded-lg shadow-md bg-gray-700 space-x-4 transition-all duration-300 cursor-pointer hover:bg-gray-600 mb-5">
                  <img
                    src={place.imageUrl}
                    alt={place.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-xl text-white">
                      {place.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{place.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Map - Set to 50% of the screen */}
        <div className="w-1/2 h-full">
          <RomaniaMap />
        </div>
      </div>
    </div>
  );
};

export default Page;
