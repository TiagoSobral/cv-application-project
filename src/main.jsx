import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import CvApplication from './components/cv-application';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<CvApplication />
	</StrictMode>
);
