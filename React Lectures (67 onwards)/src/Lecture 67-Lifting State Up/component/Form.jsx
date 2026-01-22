import React, { useEffect, useState } from "react";
import "../css/product.css";
const Form = ({ setProducts }) => {
	const [name, setName] = useState("");
	const [desc, setDesc] = useState("");
	const [quantity, setQuantity] = useState("");
	const [amount, setAmount] = useState("");
	const [error, setError] = useState("");

	function handleClick(e) {
		e.preventDefault();
		if (!name) {
			setError("Name is Required");
			return;
		}
		if (!desc) {
			setError("Desc is Required");
			return;
		}
		if (!amount) {
			setError("amount is Required");
			return;
		}
		if (amount < 0) {
			setError("amount should be greater than 0");
			return;
		}
		if (!quantity) {
			setError("quantity is Required");
			return;
		}
		if (quantity < 0) {
			setError("quantity should be greater than 0");
			return;
		}
		const temp = {
			name,
			desc,
			quantity,
			amount,
		};
		setProducts((prev) => [...prev, temp]);
		setDesc("");
		setAmount("");
		setError("");
		setQuantity("");
		setName("");
	}

	return (
		<>
			<form>
				<div className="product-name-container">
					<label htmlFor="product-name">Product Name</label>
					<input
						type="text"
						placeholder="enter product name"
						id="product-name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					></input>
				</div>
				<div className="product-desc-container">
					<label htmlFor="product-desc">Product Description</label>
					<input
						type="text"
						placeholder="enter product desc"
						id="product-desc"
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
					></input>
				</div>
				<div className="product-amount-container">
					<label htmlFor="product-amount">Amount</label>
					<input
						type="number"
						placeholder="enter amount"
						id="product-amount"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					></input>
				</div>
				<div className="product-quantity-container">
					<label htmlFor="product-quantity">Quantity</label>
					<input
						type="text"
						placeholder="enter quantity"
						id="product-quantity"
						value={quantity}
						onChange={(e) => setQuantity(e.target.value)}
					></input>
				</div>
				{error && <span className="error-ele">{error}</span>}
				<button onClick={handleClick}>Create</button>
			</form>
		</>
	);
};

export default Form;
