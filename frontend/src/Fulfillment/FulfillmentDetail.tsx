import data from "./data"
import { useParams } from 'react-router-dom'

function FulfillmentDetail() {
    const { id } = useParams<{ id: string}>();
    const fulfillment = data.fulfillment.find((o) => o._id === parseInt(id as string));

    return (
        <div>
            <h3>fulfillment name: {fulfillment?.customerName}</h3>
        </div>
    );
}

export default FulfillmentDetail;