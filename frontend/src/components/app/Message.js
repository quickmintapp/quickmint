import React from "react";

const Message = ({ message }) => {
	return (
		<div className="bg-gray-50 w-full p-4 rounded-lg text-center font-medium ">
			<p>{message}</p>
		</div>
	);
};

export default Message;
