import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';

function Fulfillment() {
    return (
        <div className="content content-margined">
            <div className="fulfillment-header">
                <h3>Fulfillment</h3>
            </div>  
            <div className="fulfillment-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>STATUS</th>
                            <th>SHIPMENT DATE</th>
                            <th>DELIVERY DATE</th>
                            <th>TRACKING NUMBER</th>
                            <th>CARRIER</th>
                            <th>CUSTOMER NAME</th>    
                        </tr>
                    </thead>
                    <tbody>
                        {data.fulfillment.map((fulfillment) => (
                            <tr 
                                key={fulfillment._id}
                                style={{
                                color: fulfillment.status === "pending" ? "red" : "inherit",
                                }}
                            >
                                <td>{fulfillment._id}</td>
                                <td>{fulfillment.status}</td>
                                <td>{fulfillment.shipmentDate}</td>
                                <td>{fulfillment.deliveryDate}</td>
                                <td>{fulfillment.trackingNumber}</td>
                                <td>{fulfillment.carrier}</td>
                                <td>{fulfillment.customerName}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>);
};

export default Fulfillment;

