import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import Home from "./Home";
import { Form } from "./_Form_formik";

const App = props => (
	<Router>
		<Home path="/" {...props} />
		<Form path="/form" {...props} />
		<Form path="/form-prefilled" {...props} />
	</Router>
);
export default App;
