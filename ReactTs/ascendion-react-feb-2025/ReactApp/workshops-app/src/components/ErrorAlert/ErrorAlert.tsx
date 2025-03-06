// import  Alert  from "react-bootstrap/Alert";

// interface Props{
//     error:Error
    
// }

// const ErrorAlert=({error}:Props)=>{
//     return(
//         <Alert variant="danger">
//             {error.message}
//         </Alert>
//     );
// }


//same thing but with default error message------

import Alert from 'react-bootstrap/Alert';

interface Props {
    error: Error
}

const ErrorAlert = ({ error = new Error( 'Something went wrong' ) } : Props) => {
    return (
        <Alert variant="danger">
            {error.message}
        </Alert>
    );
}

// ErrorAlert.defaultProps = {
//     error: new Error( 'Something went wrong' )
// }

export default ErrorAlert;
