import React from "react";
import "tailwindcss/tailwind.css";
import "../globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<ToastContainer />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
