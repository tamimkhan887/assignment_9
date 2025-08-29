import { Link } from "react-router";

const BuySingleLand = ({ buySingleLand }) => {
    const {id, image, estate_title, land_type, description } = buySingleLand;

    return (
        <div className="w-full">
            <div className="p-6 border border-green-400 rounded-2xl shadow-md bg-white flex flex-col h-[480px]">
                <p className="text-2xl font-bold mb-3 text-gray-800 line-clamp-1">{estate_title}</p>

                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                    <img
                        src={image}
                        alt={estate_title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <p className="text-green-700 font-medium text-lg mb-2">
                    Land type : {land_type}
                </p>

                <p className="text-gray-600 text-sm flex-1 line-clamp-3">
                    {description}
                </p>

                <button className="mt-4 w-fit text-green-700 font-semibold hover:text-green-900 transition-colors">
                    <Link to={`/BuyLand/${id}`}>Read More →</Link>
                </button>
            </div>
        </div>
    );
};

export default BuySingleLand;
