import { useState } from 'react';
import { CvApplication } from './components/cv-application';
import CvRendered from './components/cv-rendered';
import { cvData } from './components/data';

export default function App() {
  const [page, setPage] = useState(0);
  const [inputValues, setInputValues] = useState(cvData);

  function handleEdit() {
    setPage(0);
  }

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
      onEdit={handleEdit}
    />
  );
}
