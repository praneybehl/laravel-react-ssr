import React from "react";

import { isObjectEmpty } from '../utils';

const Home = ({ login, register, links }) => {

	return (
		<div className="flex-center position-ref full-height">
			<div className="top-right links">
				{login && <a href="/login">Login</a>}
				{register && <a href="/register">Register</a>}
			</div>

			<div className="content">
				<div className="title m-b-md">
					Laravel
				</div>

				<div className="links">
					{links && links.map((link) => (
							<a key={link.id} href={link.url} className={link.id > 6 ? 'form-page-btn' : null}
							>{link.label}</a>
						)
					)}
				</div>

			</div>
		</div>

	);
}

export default Home;
