import WorkshopDetails from "../../../components/workshops/WorkshopDetails/WorkshopDetails";
import { useParams } from 'react-router-dom';

const WorkshopDetailsPage = () => {
    // const params = useParams();
    // console.log( params );

    const { id } = useParams();

    return (
        <WorkshopDetails id={+(id as string)}/>
    );
}

export default WorkshopDetailsPage;