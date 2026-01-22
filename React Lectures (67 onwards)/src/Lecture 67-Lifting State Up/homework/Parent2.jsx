import React from "react";

const Parent2 = ({ value }) => {
	return (
		<div className="parent2">
			{value == 1 ?
				<div className="data">One</div>
			: value == 2 ?
				<>
					<div className="data">Two</div>
					<div className="data">Two</div>
				</>
			: value == 3 ?
				<>
					<div className="data">Three</div>
					<div className="data">Three</div>
					<div className="data">Three</div>
				</>
			:	null}
		</div>
	);
};

export default Parent2;
