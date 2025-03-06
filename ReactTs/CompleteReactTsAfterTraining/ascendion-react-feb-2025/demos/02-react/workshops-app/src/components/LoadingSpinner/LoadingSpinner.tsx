import Spinner from 'react-bootstrap/Spinner';
import { Theme } from '../../models/utils';

interface Props {
    variant?: Theme
}

const LoadingSpinner = ({ variant = 'primary' } : Props ) => {
    return (
        <div className="text-center">
            <Spinner animation="border" variant={variant} />
        </div>
    );
}

// old way of providing default value of props
// LoadingSpinner.defaultProps = {
//     variant: 'primary'
// }

export default LoadingSpinner;