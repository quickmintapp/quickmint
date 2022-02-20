import React from "react";

const Button = ({ btnText, classes, disabled, onClick }) => {
	return (
		<button
			className={`p-2 rounded-lg font-bold drop-shadow-xl bg-comp-100 text-white hover:bg-comp-200 ${
				classes ? classes : ""
			} ${disabled ? "opacity-25 cursor-not-allowed drop-shadow-none hover:drop-shadow-none" : ""}`}
			disabled={disabled}
			onClick={() => {
				if (onClick === undefined) {
					return;
				}
				onClick();
			}}>
			{btnText}
		</button>
	);
};

export default Button;
