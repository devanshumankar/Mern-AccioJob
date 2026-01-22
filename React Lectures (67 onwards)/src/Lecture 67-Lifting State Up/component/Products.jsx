import { useEffect } from "react";
import Product from "./Product";

function Products({ products }) {
	useEffect(() => {
		console.log("Products changed", { products });
	}, [products]);
	return (
		<div className="all-products">
			{products.map((ele, ind) => {
				console.log({ ele });

				return <Product key={ind} prod={ele}></Product>;
			})}
		</div>
	);
}

export default Products;
