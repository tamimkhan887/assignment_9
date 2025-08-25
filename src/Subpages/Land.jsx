import React from 'react';

const Land = ({ land }) => {
    console.log(land)
    const { image, estate_title, land_type, description } = land;
    return (
        <div className='p-3 border w-full border-green-400 rounded-lg'>
            <p className='text-3xl font-semibold mb-3'>{estate_title}</p>
            <img src={image} alt="" className='h-1/2 w-full rounded-lg object-cover' />
            <p className='text-green-700 font-medium text-lg my-2'>Land type : {land_type}</p>
            <p>
                {
                    description.length>100 ? description.slice(0,100): description 
                }
                ... Read More 
            </p>
        </div>
    );
};

export default Land;