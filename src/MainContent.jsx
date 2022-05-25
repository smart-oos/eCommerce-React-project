import React, { Component } from "react";
import pic from "./automartLogo.png";

export default class MainContent extends Component {
    state = {
        appTitle: "Customers",
        customersCount: 13,
        customers: [
            {
                id: 1,
                name: "Smart",
                phone: "666-678",
                address:{city:"Oshogbo"},
                photo: pic
            },
            {
                id: 2,
                name: "Aishat",
                phone: "111-678",
                address:{city:"Ibadan"},
                photo: pic
            },
            {
                id: 3,
                name: "Luck",
                phone: null,
                address: {city:"Gotham"},
                photo: pic
            },
            {
                id: 4,
                name: "Aina",
                phone: null,
                address:{city: "Awo Hall, Ile-Ife"},
                photo: pic
            },
            {
                id: 5,
                name: "Sam",
                phone: "678-678",
                address:{city: "Asolo"},
                photo: pic           
             }
        ],
    };

customerNameStyle=(custName)=>{
    if (custName.startsWith("S")) return "red-highlight border-left";
    else if (custName.startsWith("A")) return "green-highlight border-right";
    else return{};
};

    render() {
        return (
            <div>
                <h4 className="m-1 p-1">{this.state.appTitle}<span className="badge badge-secondary m-2">{this.state.customersCount}</span>
                    <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
                </h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Photo</th>
                            <th>Customer Name</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>{this.getCustomerRow()}</tbody>
                </table>
            </div>
        );
    }
    //Called function for onClick Refresh Button
    onRefreshClick = () => {
        this.setState({
            customersCount: 17,
        });
    }

    //Rendering Method for the cust.phone
    getPhoneToRender =(phone) => {
       if(phone) return phone;
        else{
            return <div className="bg-warning p-1 text-center">No Phone</div>;       
        }
    }

    //Reder CustomerRow...
    getCustomerRow = ()=> {
        return this.state.customers.map((cust) => {
            return (
                <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td>
                        <img src={cust.photo} alt="Customer pics" height="17" width="120" />
                    </td>
                    <td className={this.customerNameStyle(cust.name)}>{cust.name}</td>
                    <td>{this.getPhoneToRender(cust.phone)}</td>
                    <td>{cust.address.city}</td>
                </tr>);
            });
        }

}
