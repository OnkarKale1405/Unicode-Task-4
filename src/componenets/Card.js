import React from 'react'
import { NavLink } from 'react-router-dom';
import useDetails from '../hooks/useDetails';

function Card({ id, title, price, images }) {

    // for details Page
    const { setDetails } = useDetails();

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundImage: `url(${images})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div className="card h-80 w-60 shadow-md" key={id}>
            <div className='image-icon h-3/4 w-full p-1'>
                <div className="thumbnail-photo" style={slideStyles}></div>
            </div>
            <div className="card-body my-2 px-2 py-1 flex flex-col">
                <h5 className="card-title text-lg">{title}</h5>
                <p className="card-text text-md mb-1">Price : ₹{price}</p>
                <NavLink to='/Unicode-Task-4/details'
                    className="mx-auto my-2 px-12 py-2 hover:bg-[#353535] bg-[#555555] text-white rounded-lg"
                    onClick={() => setDetails(id-1)} >
                    show details
                </NavLink>
            </div>
        </div>
    )
}

export default Card;