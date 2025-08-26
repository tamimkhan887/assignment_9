import { useLoaderData } from "react-router";
import Slider from "../../Subpages/Slider";
import Land from "../../Subpages/land";
import { useState } from "react";

const Home = () => {
    const lands = useLoaderData();
    const [loadMore, setLoadmore] = useState(6);
    return (
        <div>
            <Slider></Slider>
            <h3 className="text-center font-bold my-10 text-3xl">Find Your Own Land</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-7 md:mx-14">
                {
                    lands.slice(0, loadMore).map(land => <Land land={land} key={land.id}></Land>)
                }
            </div>
            {
                loadMore <= 6 ? <div onClick={() => setLoadmore(9)} className="flex items-center justify-center my-4">
                    <button className="text-white font-semibold bg-green-600 p-3 rounded-lg btn">Load More</button>
                </div> : <div onClick={() => setLoadmore(6)} className="flex items-center justify-center my-4">
                    <button className="text-white font-semibold bg-red-600 p-3 rounded-lg btn">Load Less</button>
                </div>
            }
            
        </div>
    );
};

export default Home;