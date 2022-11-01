import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppContextProvider from './Context/AppContext';
import {Toaster} from 'react-hot-toast'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<AppContextProvider>
			<Toaster />
			<App />
		</AppContextProvider>
	</React.StrictMode>
);

reportWebVitals();
