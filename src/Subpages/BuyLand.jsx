import { useEffect, useState } from "react";
import BuySingleLand from "./BuySingleLand";

const BuyLand = () => {
    const [buyLand , setBuyLand] = useState([])
    useEffect(()=>{
        fetch("../../public/Demo_Data/data.JSON")
        .then(res => res.json())
        .then(data => setBuyLand(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-7 md:mx-14 mt-26 mb-26">
            {
                buyLand.map(buySingleLand => <BuySingleLand buySingleLand={buySingleLand} key={buySingleLand.id}></BuySingleLand> )
            }
        </div>
    );
};

export default BuyLand;