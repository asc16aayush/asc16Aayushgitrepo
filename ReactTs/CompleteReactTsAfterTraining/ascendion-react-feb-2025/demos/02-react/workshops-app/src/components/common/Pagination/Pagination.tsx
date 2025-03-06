import { Button } from "react-bootstrap";

interface Props {
    page?: number, // "input" prop
    onPrevious?: (newPage: number) => void, // "output" prop ("callback" prop)
    onNext?: (newPage: number) => void, // "output" prop ("callback" prop)
    disablePrevious?: boolean, // "input" prop
    disableNext?: boolean, // "input" prop
}

const Pagination = (
    {
        page = 1,
        onPrevious = () => {},
        onNext = () => {},
        disablePrevious = false,
        disableNext = false
    } : Props
) => {
    return (
        <>
            <Button
                variant="primary"
                size="sm"
                disabled={disablePrevious || page === 1}
                onClick={(event) => onPrevious(page - 1)}
                className="me-2"
            >
                Previous
            </Button>
            <Button
                variant="primary"
                size="sm"
                disabled={disableNext}
                onClick={() => onNext(page + 1)}
            >
                Next
            </Button>
            <div>You are viewing page {page}</div>
        </>
    );
}

export default Pagination;