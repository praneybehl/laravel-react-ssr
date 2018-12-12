import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {mockdata} from "./mockData";

const prod = process.env.NODE_ENV == 'production';


const { serverData } = prod ? window.__PRELOADED_STATE__ : {serverData: mockdata};

if(prod) {
	// Allow the passed state to be garbage-collected
	delete window.__PRELOADED_STATE__;
	ReactDOM.hydrate(<App {...serverData} />, document.getElementById("root"));
} else {
	ReactDOM.render(<App {...serverData} />, document.getElementById("root"));
}
