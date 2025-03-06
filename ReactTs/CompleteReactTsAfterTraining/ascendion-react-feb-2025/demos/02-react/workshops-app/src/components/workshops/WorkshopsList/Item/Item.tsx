import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import IWorkshop from "../../../../models/IWorkshop";
import FormattedDate from "../../../common/FormattedDate/FormattedDate";
import ThemeContext from "../../../../contexts/ThemeContext";

import './Item.scss';

const Item = ({ id, name, category, imageUrl, location, startDate, endDate }: IWorkshop ) => {
    const { theme  } = useContext(ThemeContext);

    return (
        <Card className="w-100 p-3" bg={theme}>
            <div className="card-img-top-wrapper">
                <Card.Img variant="top" src={imageUrl} alt={name} />
            </div>
            <Card.Body>
                <Card.Title>
                    {name} ({category})</Card.Title>
                <Card.Text>
                    <div>{location.address}, {location.city}, {location.state}</div>
                    <div>
                        <FormattedDate date={startDate} />
                        <span> - </span>
                        <FormattedDate date={endDate} />
                    </div>
                </Card.Text>
                <Link to={`/workshops/${id}`}>
                    <Button variant="primary">Know more</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Item;