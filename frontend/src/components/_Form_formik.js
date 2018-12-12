import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import classnames from "classnames";

const formikEnhancer = withFormik({
	validationSchema: Yup.object().shape({
		firstName: Yup.string()
			.min(2, "C'mon, your name is longer than that")
			.required("First name is required."),
		lastName: Yup.string()
			.min(2, "C'mon, your name is longer than that")
			.required("Last name is required."),
		email: Yup.string()
			.email("Invalid email address")
			.required("Email is required!")
	}),

	mapPropsToValues: ({ user }) => {
		return {
			firstName: user && user.firstName || '',
			lastName: user && user.lastName || '',
			email: user && user.email || ''
		}
	},
	handleSubmit: (payload, bag) => {
		document.querySelector('form').submit();
	},
	displayName: "MyForm"
});

const InputFeedback = ({ error }) =>
	error ? <div className="input-feedback">{error}</div> : null;

const Label = ({ error, className, children, ...props }) => {
	return (
		<label className="label" {...props}>
			{children}
		</label>
	);
};

const TextInput = ({ type, id, label, error, value, onChange, className, ...props }) => {
	const classes = classnames( "input-group", { "animated shake error": !!error }, className );
	return (
		<div className={classes}>
			<Label htmlFor={id} error={error}>
				{label}
			</Label>
			<input
				id={id}
				className="text-input"
				type={type}
				value={value}
				onChange={onChange}
				{...props}
			/>
			<InputFeedback error={error} />
		</div>
	);
};
const MyForm = props => {
	const {
		values,
		touched,
		errors,
		dirty,
		handleChange,
		handleBlur,
		handleSubmit,
		handleReset,
		isSubmitting,
		formAction,
		token
	} = props;
	return (
		<form action={formAction} method="POST" onSubmit={handleSubmit}>
			<TextInput
				name="firstName"
				type="text"
				label="First Name"
				placeholder="John"
				error={touched.firstName && errors.firstName}
				value={values.firstName}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<TextInput
				name="lastName"
				type="text"
				label="Last Name"
				placeholder="Doe"
				error={touched.lastName && errors.lastName}
				value={values.lastName}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<TextInput
				name="email"
				type="email"
				label="Email"
				placeholder="Enter your email"
				error={touched.email && errors.email}
				value={values.email}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<TextInput
			name="_token"
			type="hidden"
			value={token}
		/>
			<button
				type="button"
				className="outline"
				onClick={handleReset}
				disabled={!dirty || isSubmitting}
			>
				Reset
			</button>
			<button type="submit" disabled={isSubmitting}>
				Submit
			</button>
			<DisplayFormikState {...props} />
		</form>
	);
};

const MyEnhancedForm = formikEnhancer(MyForm);

// Helper for the demo
const DisplayFormikState = props => (
	<div style={{ margin: "1rem 0" }}>
		<h3 style={{ fontFamily: "monospace" }} />
		<pre
			style={{
				background: "#f6f8fa",
				fontSize: ".65rem",
				padding: ".5rem"
			}}
		>
      <strong>props</strong> = {JSON.stringify(props, null, 2)}
    </pre>
	</div>
);

export const Form = ({user, formAction, token}) => (
	<div className="form">
		<h1> Sample Form </h1>

		<MyEnhancedForm user={user} formAction={formAction} token={token}/>
	</div>
);
