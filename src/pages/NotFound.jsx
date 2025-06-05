// filepath: d:\Academics\3-2\Project-350\Agro-Project-Frontend\src\pages\NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="text-center">
				<h1 className="text-4xl font-bold mb-4">404</h1>
				<p className="text-xl mb-4">Page Not Found</p>
				<Link to="/" className="text-blue-500 hover:underline">
					Go back to Home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
