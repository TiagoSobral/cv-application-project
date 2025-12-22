import { useState } from 'react';
import CvApplication from './cv-application';
import CvRendered from './cv-rendered';

export default function App() {
	const [page, setPage] = useState(0);
	const [inputValues, setInputValues] = useState({});

	return page === 0 ? (
		<CvApplication
			setPage={setPage}
			inputValues={inputValues}
			setInputValues={setInputValues}
		/>
	) : (
		<CvRendered inputValues={inputValues} />
	);
}
