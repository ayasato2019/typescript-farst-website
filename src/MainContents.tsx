import React from 'react';
//style
//compornent
import Sns from './compornent/Sns';
import ToppageMv from './compornent/ToppageMv';
import ToppageBisiness from './compornent/ToppageBisiness';

function MainContents() {
	return (
		<main className="l-main">
			<div className="p-scroll"><i></i></div>
			<Sns />
			<ToppageMv />
			<ToppageBisiness />
		</main>
	);
}

export default MainContents;