import Alert from 'react-bootstrap/Alert';

interface Props {
    error?: Error
}

const ErrorAlert = ({ error = new Error( 'Something went wrong' ) } : Props) => {
    return (
        <Alert variant="danger">
            {error.message}
        </Alert>
    );
}

// old way of providing default value of props
// ErrorAlert.defaultProps = {
//     error: new Error( 'Something went wrong' )
// }

export default ErrorAlert;