import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import ErrorAlert from "../../common/ErrorAlert/ErrorAlert";
import Pagination from "../../common/Pagination/Pagination";

import Item from "./Item/Item";

import { getWorkshops } from "../../../services/workshops";
import IWorkshop from "../../../models/IWorkshop";

// uuid -> unique id generator library

const WorkshopsList = () => {
    const [loading, setLoading] = useState(true);
    const [workshops, setWorkshops] = useState<IWorkshop[]>([]);
    const [error, setError] = useState<Error | null>(null);

    const [filterKey, setFilterKey] = useState('');
    const [filteredWorkshops, setFilteredWorkshops] = useState<IWorkshop[]>([]);

    // const [page, setPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const page = +(searchParams.get("page") || "1"); // Default to page 1
    const category = searchParams.get("category") || "";

    // side-effect -> eg. we want to fetch workshops data from the backend
    useEffect(
        () => {
            const helper = async () => {
                setLoading(true);

                try {
                    const workshops = await getWorkshops(page, category);
                    // console.log(workshops);
                    setWorkshops(workshops);
                    setLoading(false);
                } catch (error) {
                    // console.log(error);
                    setError(error as Error);
                    setLoading(false);
                }
            };

            helper();
        },
        // [ ] // empty array -> causes the effect to execute only AFTER first render
        [page, category] // execute AFTER first render + whenever page change
    );

    // side-effect for filtering when filterKey or workshops states change
    useEffect(
        () => {
            setFilteredWorkshops(
                workshops.filter(
                    (workshop) => workshop.name.toUpperCase().includes(filterKey.toUpperCase())
                )
            );
        },
        [workshops, filterKey]
    );

    const previous = (newPage: number) => {
        if (page <= 1) {
            return;
        }

        // when the new state depends on the current state, we use the function form of the setter
        // setPage((p) => p - 1);
        setSearchParams({ page: '' + newPage });
    };

    const next = (newPage: number) => {
        setSearchParams({ page: '' + newPage });
    };

    return (
        <div>
            <h1>List of workshops</h1>
            <hr />
            <div>
                <Pagination
                    page={page}
                    onPrevious={previous}
                    onNext={next}
                    disablePrevious={!(loading === false && error === null)}
                    disableNext={!(loading === false && error === null)}
                />
            </div>
            <div>
                <input
                    type="search"
                    className="form-control"
                    placeholder="Type to search by name"
                    value={filterKey}
                    onChange={(event) => setFilterKey(event.target.value)}
                />
                <div>
                    Workshops whose name has
                    <span className="text-primary"> {filterKey} </span> are shown.
                </div>
            </div>
            <div>
                <div className="btn-group my-3" role="group" aria-label="Filter by category">
                    <button type="button" className="btn btn-primary" onClick={() => setSearchParams({ category: '' })}>All</button>
                    <button type="button" className="btn btn-danger" onClick={() => setSearchParams({ category: 'frontend' })}>Frontend</button>
                    <button type="button" className="btn btn-warning" onClick={() => setSearchParams({ category: 'backend' })}>Backend</button>
                    <button type="button" className="btn btn-success" onClick={() => setSearchParams({ category: 'devops' })}>Devops</button>
                    <button type="button" className="btn btn-info" onClick={() => setSearchParams({ category: 'language' })}>Language</button>
                    <button type="button" className="btn btn-light" onClick={() => setSearchParams({ category: 'mobile' })}>Mobile</button>
                    <button type="button" className="btn btn-dark" onClick={() => setSearchParams({ category: 'database' })}>Database</button>
                </div>
            </div>
            {
                /* if..else */
                loading ? <LoadingSpinner variant="success" /> : <div>Completed loading</div>
            }
            {
                /* if */
                loading === false && error !== null && (
                    <ErrorAlert error={error} />
                )
            }
            {loading === false && error === null && (
                <Row xs={1} md={3} lg={4}>
                    {filteredWorkshops.map((workshop, idx) => (
                        <Col className="my-3 d-flex" key={workshop.id}>
                            <Item {...workshop} />
                        </Col>
                    ))}
                </Row>
            )}
            {/*
                {
                    [
                        <div key={workshops[0].id}>{workshops[0].name}</div>,
                        <div key={workshops[1].id}>{workshops[1].name}</div>,
                        <div>{workshops[2].name}</div>,
                        <div>{workshops[3].name}</div>,
                        ....
                    ]
                */}
        </div>
    );
};

export default WorkshopsList;
