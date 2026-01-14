import PersonalInformation from './personal-info';
import Education from './education';
import Experience from './experience';
import Button from './buttons';
import { cvData, education, experience } from './data';
import { useState } from 'react';

function CvApplication({ inputValues, setInputValues, setPage }) {
  const [errors, setErrors] = useState(cvData);
  function handleInput(e) {
    // this function sets the state of inputValues in one single object.
    const className = e.target.className;
    const id = e.target.id;
    const value = e.target.value;
    const dataKey = e.target.dataset.key;

    if (className === 'personalInfo') {
      setInputValues({
        ...inputValues,
        [className]: { ...inputValues[className], [id]: value },
      });
    } else {
      let groupChildren = inputValues[className];
      setInputValues({
        ...inputValues,
        [className]: updateValuesInGroup(groupChildren, id, value, dataKey),
      });
    }
  }

  function handleAddInputs(e) {
    // adds a new group of inputs once add btn is clicked based on its className
    const className = e.target.className;

    if (className === 'education') {
      const newEducation = { ...education, id: crypto.randomUUID() };
      setInputValues({
        ...inputValues,
        [className]: [...inputValues[className], newEducation],
      });
      setErrors({
        ...errors,
        [className]: [...errors[className], newEducation],
      });
    } else {
      const newExperience = { ...experience, id: crypto.randomUUID() };
      setInputValues({
        ...inputValues,
        [className]: [...inputValues[className], newExperience],
      });
      setErrors({
        ...errors,
        [className]: [...errors[className], newExperience],
      });
    }
  }

  /* returns the error message to each of their own error state */
  function handleOnBlur(e) {
    let className = e.target.className;
    let name = e.target.id;
    let groupId = e.target.dataset.key;
    let error = e.target.validationMessage;
    if (error === '') error = 'no error';

    if (className === 'personalInfo') {
      setErrors({
        ...errors,
        [className]: { ...errors[className], [name]: error },
      });
    } else {
      setErrors({
        ...errors,
        [className]: updateValuesInGroup(
          errors[className],
          name,
          error,
          groupId
        ),
      });
    }
  }

  function handleSubmit(e) {
    let personErrors = hasErrors(errors.personalInfo);
    let eduErrors = hasErrors(errors.education);
    let expErrors = hasErrors(errors.experience);

    if (!personErrors && !eduErrors && !expErrors) {
      e.preventDefault();
      setPage(1);
    } else {
      setErrors(errors);
    }
  }

  function handleDelete(e) {
    const deleteId = e.target.dataset.id;
    const className = e.target.className;
    const section = inputValues[className];

    setInputValues({
      ...inputValues,
      [className]: deleteChild(section, deleteId),
    });
  }

  return (
    <>
      <Header className="title" titleText="Resume Generator" />
      <main>
        <form className="application" noValidate>
          <PersonalInformation
            inputValues={inputValues.personalInfo}
            errors={errors.personalInfo}
            onChange={handleInput}
            onClick={handleAddInputs}
            onBlur={handleOnBlur}
            onInvalid={handleOnBlur}
          />
          <Education
            inputValues={inputValues.education}
            errors={errors.education}
            onChange={handleInput}
            onClick={handleAddInputs}
            onDelete={handleDelete}
            onBlur={handleOnBlur}
            onInvalid={handleOnBlur}
          />
          <Experience
            inputValues={inputValues.experience}
            errors={errors.experience}
            onChange={handleInput}
            onClick={handleAddInputs}
            onDelete={handleDelete}
            onBlur={handleOnBlur}
            onInvalid={handleOnBlur}
          />
          <div className="submit">
            <Button
              id="submit"
              value="submit"
              text="Submit"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </main>
      <footer>
        <h1>©Tiago Sobral</h1>
        <button className="gitHub">
          <a href=""></a>
        </button>
      </footer>
    </>
  );
}

function Header({ className, titleText }) {
  return (
    <header>
      <h1 className={className}>{titleText}</h1>
    </header>
  );
}

function updateValuesInGroup(childrenArray, id, value, dataKey) {
  return childrenArray.map((element) =>
    element.id == dataKey ? { ...element, [id]: value } : element
  );
}

function deleteChild(array, id) {
  return array.filter((child) => child.id != id);
}

function hasErrors(value) {
  let error;
  let foundError;
  if (Array.isArray(value)) {
    // when the value received is from experience or education.
    error = value.map((group) => Object.values(group));
    // removes the id value from the returning arrays.
    error = error.map((child) => child.filter((value, index) => index != 0));
    // goes through the values and returns true if has values an error
    foundError = error.map((group) =>
      group.some((value) => value === '' && value != 'no error')
    );
    /* if there is more than one group of education or experience go through all and return just a single value  */
    if (value.length > 1) {
      foundError = foundError.some((groupInputs) => groupInputs === true);
    }
    /* because it will always return an array we access the filtered single value obtain by the previous code */
    foundError = foundError[0];
  } else {
    // when it comes from personalInfo
    error = Object.values(value);
    foundError = error.some((value) => value === '' && value != 'no error');
  }
  // returns true when has error message false when it doesn't
  return foundError;
}

export { CvApplication, Header };
