import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Col, Image, Row } from 'react-bootstrap';

import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import ErrorAlert from "../../ErrorAlert/ErrorAlert";

import SessionsList from './SessionsList/SessionsList';
import AddSession from './AddSession/AddSession';

import { getWorkshopById } from '../../../services/workshops';
import IWorkshop from '../../../models/IWorkshop';

interface Props {
    id: number
}

// EXERCISE: Check React Query, TanStack Query
const WorkshopDetails = ({ id } : Props) => {
    const [loading, setLoading] = useState(true);
    const [workshop, setWorkshop] = useState<IWorkshop | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(
        // side-effect function (f)
        () => {
            const helper = async () => {
                setLoading(true);

                try {
                    const workshop = await getWorkshopById(id);

                    setLoading(false);
                    setWorkshop(workshop);
                } catch (error) {
                    setLoading(false);
                    setError(error as Error);
                }
            };

            helper();
        },
        []
    );

    return (
        <div>
            {loading && (
                <LoadingSpinner />
            )}

            {!loading && error && (
                <ErrorAlert error={error} />
            )}

            {!loading && !error && workshop && (
                <Row>
                    <Col xs={12} md={4}>
                        <Image
                            src={workshop.imageUrl}
                            alt={workshop.name}
                            fluid
                        />
                    </Col>
                    <Col xs={12} md={8}>
                        <h1>{workshop.name}</h1>
                        <hr />
                        <div dangerouslySetInnerHTML={{
                            __html: workshop.description
                        }}></div>
                    </Col>
                </Row>
            )}

            <div className="my-4">
                <Routes>
                    <Route path="" element={<SessionsList id={id} />} />
                    <Route path="/add" element={<AddSession id={id} />} />
                </Routes>
            </div>
        </div>
    );
}

export default WorkshopDetails;