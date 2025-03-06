import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getWorkshopById } from "home/workshops";

const WorkshopDetails = () => {
    const { id } = useParams();

    const [ workshop, setWorkshop ] = useState(null);

    useEffect(
      () => {
        if( id ) {
          getWorkshopById(id).then(
            workshop => {
              setWorkshop(workshop);
            }
          );
        } else {
          setWorkshop(null)
        }
      },
      [id]
    );

    if(!workshop) {
        return null;
    }

    return (
        <div>
          <h1>{workshop.name}</h1>
          <hr />
          <img
            src={workshop.image || workshop.imageUrl}
            alt={workshop.name}
          />
          <div dangerouslySetInnerHTML={{ __html: workshop.description}}></div>
        </div>
    );
}

export default WorkshopDetails;
