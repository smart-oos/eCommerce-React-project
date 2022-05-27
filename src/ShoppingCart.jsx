import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
    state = {
        products: [
            { id: 1, carName: "Camry", price: 2000000, quantity: 0 },
            { id: 2, carName: "Golf", price: 3500000, quantity: 0 },
            { id: 3, carName: "4Runner", price: 6180000, quantity: 0 },
            { id: 4, carName: "Corolla", price: 2060000, quantity: 0 },
            { id: 5, carName: "Toyota RD", price: 3000000, quantity: 0 },
            { id: 6, carName: "Hyunda Sonanta", price: 2508000, quantity: 0 },
        ],
    };
    render() {
        return (
            <div className="container-fluid">
                <h4>Shopping Cart</h4>

                <div className="row">
                    {this.state.products.map((prod) => {
                        return <Product
                            key={prod.id}
                            // id={prod.id}
                            // carName={prod.carName}
                            // price={prod.price}
                            product={prod} 
                        />;
                    })};

                </div>
            </div>
        );

    };
}