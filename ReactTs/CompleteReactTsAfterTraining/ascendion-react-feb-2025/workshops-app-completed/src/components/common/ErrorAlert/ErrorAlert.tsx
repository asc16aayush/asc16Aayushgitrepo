import { Alert } from "react-bootstrap";

interface Props {
    error: Error;
}

const ErrorAlert = ({ error }: Props) => {
    return error !== null ? (
        <Alert variant="danger">
            {error.message}
        </Alert>
    ) : null;
};

export default ErrorAlert;
