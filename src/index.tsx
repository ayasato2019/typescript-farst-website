import React from 'react';
import ReactDOM from 'react-dom/client';

//style
import './scssStyle.scss';
import './destyle.css';

//compornent
import Header from './Header';
import MainContents from './MainContents';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<div className='l-body'>
			<Header />
			<MainContents />
			<Footer />
		</div>
	</React.StrictMode>
);

reportWebVitals();
