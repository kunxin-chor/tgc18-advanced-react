import { Fragment, useContext } from "react";
import ProductContext from "./ProductContext";

export default function ProductListing() {
    const context = useContext(ProductContext);
    return (
        <Fragment>
            <h1>Product Listings</h1>
            <ul>
                {
                    context.getProducts().map( p => 
                        <li>{p.product_name}</li>)
                }
            </ul>
        </Fragment>
    )
}