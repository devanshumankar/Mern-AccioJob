import React from "react";
import Options from "./Options";
import "../css/question.css";
const Question = ({ question, onSelect, selectedOption }) => {
	return (
		<>
			<h2>{question.ques}</h2>
			<div className="option-container">
				{question.options.map((ele, ind) => {
					return (
						<Options
							option={ele}
							key={ind}
							onClick={() => onSelect(ind)}
							isSelected={selectedOption === ind}
						/>
					);
				})}
			</div>
		</>
	);
};

export default Question;
