"use client";
import { useParams } from "next/navigation";

const TouristPlaceDetails = () => {
  const { id } = useParams(); // Use useParams to get the dynamic ID

  // Sample data for tourist places
  const touristPlaces = [
    {
      id: 1,
      name: "Bran Castle",
      imageUrl: "/images/bran.jpg", // Minimalistic image
      description: "A historic fortress located in the heart of Transylvania.",
      historicalSignificance:
        "Bran Castle, often referred to as 'Dracula's Castle,' is a 14th-century fortress that symbolizes Romania's medieval past. Strategically located on the border between Transylvania and Wallachia, it served as a defense against invasions, particularly during the Ottoman Empire's expansion into Europe. The castle is steeped in legends and history, making it a focal point for those interested in the tales of Vlad the Impaler.",
      prominence:
        "Today, Bran Castle is one of Romania's most visited tourist attractions, drawing over half a million visitors annually. The castle features a museum showcasing art and furniture collected by Queen Marie of Romania, providing insights into the royal lifestyle of the early 20th century. The blend of history, architecture, and folklore contributes to its status as a must-visit destination for tourists and history enthusiasts alike.",
    },
    {
      id: 2,
      name: "Peles Castle",
      imageUrl: "/images/peles-castle.jpg", // Minimalistic image
      description: "A former royal residence in the Carpathian Mountains.",
      historicalSignificance:
        "Constructed between 1873 and 1914, Peles Castle served as the summer residence of King Carol I of Romania. It is a stunning example of Neo-Renaissance architecture, combining various styles and influences from across Europe. The castle was one of the first in the world to have electricity and was designed to be a cultural and artistic hub, hosting many prominent figures of the time.",
      prominence:
        "Peles Castle is renowned for its breathtaking architecture and lush surroundings. Visitors can explore over 160 rooms, each uniquely decorated, showcasing exquisite craftsmanship in woodwork, stained glass, and frescoes. The castle grounds feature beautifully landscaped gardens and stunning mountain views, making it a popular destination for both tourists and photographers seeking the perfect shot.",
    },
    {
      id: 3,
      name: "Sighisoara",
      imageUrl: "/images/sighisoara.jpg", // Minimalistic image
      description: "A medieval citadel and birthplace of Vlad the Impaler.",
      historicalSignificance:
        "Sighisoara is one of the best-preserved medieval towns in Europe and is recognized as a UNESCO World Heritage site. The town's citadel, with its cobbled streets and colorful buildings, dates back to the 12th century when it was established by German settlers. It is also the birthplace of Vlad the Impaler, the historical figure who inspired the Dracula legend, adding to its allure and historical significance.",
      prominence:
        "Sighisoara is not only a historical gem but also a vibrant cultural hub. The town hosts an annual medieval festival that attracts visitors from around the globe, featuring traditional crafts, music, and performances. The iconic Clock Tower, the Church on the Hill, and the numerous artisan shops contribute to its charm, making it a favorite stop for travelers exploring Transylvania.",
    },
    {
      id: 4,
      name: "Transfagarasan Highway",
      imageUrl: "/images/transfagarasan.jpg", // Minimalistic image
      description:
        "One of the most scenic roads in the world, crossing the Fagaras Mountains.",
      historicalSignificance:
        "Constructed between 1970 and 1974 under the regime of Nicolae Ceaușescu, the Transfagarasan Highway was built as a strategic military route to connect Transylvania with Wallachia. The construction was a monumental engineering feat, overcoming challenging terrain and harsh weather conditions, and remains a testament to the era's ambitions.",
      prominence:
        "The Transfagarasan Highway is famed for its stunning views, winding roads, and hairpin turns, making it a favorite among driving enthusiasts and photographers. Stretching over 90 kilometers, it offers breathtaking landscapes of the Fagaras Mountains, lush valleys, and glacial lakes. Along the route, visitors can stop at various viewpoints, waterfalls, and hiking trails, making it an unforgettable experience for nature lovers and adventure seekers.",
    },
    {
      id: 5,
      name: "Danube Delta",
      imageUrl: "/images/danube-delta.jpg",
      description:
        "A UNESCO World Heritage site known for its rich biodiversity.",
      historicalSignificance:
        "The Danube Delta is one of the largest and best-preserved deltas in Europe, formed by the Danube River as it flows into the Black Sea. This unique ecosystem has been a crucial habitat for countless species of flora and fauna for thousands of years. The delta has also been inhabited by various cultures throughout history, including the ancient Greeks and Romans, who recognized its strategic importance.",
      prominence:
        "Home to over 300 species of birds and numerous fish species, the Danube Delta is a paradise for nature lovers and birdwatchers. It is one of the most important wetlands in Europe, providing vital habitats for migratory birds. The delta is also a popular destination for eco-tourism, offering opportunities for boating, fishing, and hiking through its stunning landscapes. Visitors can explore traditional fishing villages and enjoy the serene beauty of this natural wonder.",
    },
  ];

  // Find the selected tourist place based on the ID
  const place = touristPlaces.find((p) => p.id === parseInt(id));

  // If the place is not found, handle it accordingly
  if (!place) {
    return <div>Place not found</div>;
  }

  return (
    <div className="flex flex-col md:flex-row  bg-gray-900 text-white p-6 h-[100vh] justify-center items-center ">
      <div className="md:w-1/2 mb-4 md:mb-0">
        <img
          src={place.imageUrl}
          alt={place.name}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="md:w-1/2 md:pl-6">
        <h1 className="text-4xl font-bold mb-4">{place.name}</h1>
        <p className="text-lg mb-4">{place.description}</p>
        <h2 className="text-2xl font-semibold mb-2">Historical Significance</h2>
        <p className="text-md mb-4">{place.historicalSignificance}</p>
        <h2 className="text-2xl font-semibold mb-2">Prominence</h2>
        <p className="text-md mb-4">{place.prominence}</p>
      </div>
    </div>
  );
};

export default TouristPlaceDetails;
