import React from "react";
import ReactDOM from "react-dom";
import { renderToString } from "react-dom/server"
import { ServerLocation } from "@reach/router"
import App from "./components/App";


// Compile an initial state
const { serverData, url } = context;

const html = renderToString(
	<div id="root">
		<ServerLocation url={url}>
			<App {...serverData}/>
		</ServerLocation>
	</div>
);

dispatch(html);
