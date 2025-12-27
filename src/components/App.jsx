import { useState } from 'react';
import CvApplication from './cv-application';
import CvRendered from './cv-rendered';
import { cvData } from './data';

export default function App() {
	const [page, setPage] = useState(0);
	const [inputValues, setInputValues] = useState(cvData);

	return page === 0 ? (
		<CvApplication
			setPage={setPage}
			inputValues={inputValues}
			setInputValues={setInputValues}
		/>
	) : (
		<CvRendered
			form={inputValues}
			changePage={setPage}
			setValues={setInputValues}
		/>
	);
}
