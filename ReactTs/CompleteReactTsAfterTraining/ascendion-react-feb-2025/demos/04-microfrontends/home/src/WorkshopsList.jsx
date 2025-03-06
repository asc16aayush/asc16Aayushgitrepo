import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getWorkshops } from './services/workshops';

const WorkshopsList = () => {
    const [workshops, setWorkshops] = useState([]);

    useEffect(
        () => {
            getWorkshops().then(setWorkshops);
        },
        []
    )

    return (
        <div className="grid grid-cols-4 gap-5">
            {
                workshops.map(w => (
                    <Link key={w.id} to={"/workshops/" + w.id}>
                        <img
                            src={w.image || w.imageUrl}
                            alt={w.name}
                        />
                    </Link>
                ))
            }
        </div>
    );
}

export default WorkshopsList;
