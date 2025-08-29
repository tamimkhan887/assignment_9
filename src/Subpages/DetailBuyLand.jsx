import { useLoaderData, useParams } from "react-router";

const DetailBuyLand = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const latestObj = data.find((singleData) => singleData.id === Number(id));

  if (!latestObj) {
    return <p className="text-center text-red-500 text-xl mt-10">Land not found!</p>;
  }

  const {
    estate_title,
    segment_name,
    description,
    area,
    image,
    land_type,
    location,
    owner,
    price,
    posted_date,
  } = latestObj;

  return (
    <div className="max-w-5xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">
      <img
        src={image}
        alt={estate_title}
        className="w-full h-[400px] object-cover rounded-xl mb-6"
      />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{estate_title}</h1>
        <p className="text-2xl font-semibold text-green-600 mt-2 md:mt-0">
          {price}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <p><span className="font-semibold">Segment:</span> {segment_name}</p>
        <p><span className="font-semibold">Type:</span> {land_type}</p>
        <p><span className="font-semibold">Area:</span> {area}</p>
        <p><span className="font-semibold">Location:</span> {location}</p>
        <p><span className="font-semibold">Owner:</span> {owner}</p>
        <p><span className="font-semibold">Posted Date:</span> {posted_date}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      <div className="text-center">
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition">
          Contact Owner
        </button>
      </div>
    </div>
  );
};

export default DetailBuyLand;
