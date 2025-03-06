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

// LoadingSpinner.defaultProps = {
//     variant: 'primary'
// }

export default LoadingSpinner;