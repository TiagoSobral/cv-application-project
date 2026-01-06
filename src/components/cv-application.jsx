import PersonalInformation from './personal-info';
import Education from './education';
import Experience from './experience';
import Button from './buttons';
import { cvData, educationChild, experienceChild } from './data';
// import fluid from '../assets/fluid.png';
import fluidtwo from '../assets/fluid-two.png';
import { useState } from 'react';

function CvApplication({ inputValues, setInputValues, setPage }) {
  const [errorPerson, setErrorPerson] = useState(cvData.personalInfo);
  const [errorEdu, setErrorEdu] = useState(cvData.education.children);
  const [errorExp, setErrorExp] = useState(cvData.experience.children);

  function handleInput(e) {
    const className = e.target.className;
    const id = e.target.id;
    const value = e.target.value;
    const dataKey = e.target.dataset.key;

    switch (className) {
      case 'personalInfo': {
        const personalInfo = inputValues.personalInfo;
        setInputValues({
          ...inputValues,
          personalInfo: { ...personalInfo, [id]: value },
        });
        break;
      }
      case 'education': {
        const education = inputValues.education;
        const eduChildren = education.children;
        setInputValues({
          ...inputValues,
          education: {
            ...education,
            children: updateChildrenValues(eduChildren, id, value, dataKey),
          },
        });
        break;
      }
      case 'experience': {
        const experience = inputValues.experience;
        const expChildren = experience.children;
        setInputValues({
          ...inputValues,
          experience: {
            ...experience,
            children: updateChildrenValues(expChildren, id, value, dataKey),
          },
        });
        break;
      }
    }
  }

  function handleAddInputs(e) {
    const className = e.target.className;
    const newEducation = { ...educationChild, id: crypto.randomUUID() };
    const newExperience = { ...experienceChild, id: crypto.randomUUID() };

    if (className === 'education') {
      const education = inputValues.education;
      const children = inputValues.education.children;
      setInputValues({
        ...inputValues,
        education: {
          ...education,
          children: [...children, newEducation],
        },
      });
    } else {
      const experience = inputValues.experience;
      const children = inputValues.experience.children;
      setInputValues({
        ...inputValues,
        experience: {
          ...experience,
          children: [...children, newExperience],
        },
      });
    }
  }

  /* returns the error message to each of their own error state */
  function handleInvalid(e) {
    let className = e.target.className;
    let name = e.target.id;
    let groupId = e.target.dataset.key;
    let error = e.target.validationMessage;

    switch (className) {
      case 'personalInfo':
        setErrorPerson({ ...errorPerson, [name]: error });
        break;
      case 'education':
        setErrorEdu(updateChildrenValues(errorEdu, name, error, groupId));
        break;
      case 'experience':
        setErrorExp(updateChildrenValues(errorExp, name, error, groupId));
    }
  }

  function handleSubmit(e) {
    let personal = hasErrors(errorPerson);
    let edu = hasErrors(errorEdu);
    let exp = hasErrors(errorExp);

    if (personal && edu && exp) {
      e.preventDefault();
      setPage(1);
    }
  }

  function handleDelete(e, inputValues, setInputValues) {
    const deleteId = e.target.dataset.id;
    const deleteClass = e.target.className;
    const section = inputValues[deleteClass];
    const sectionChildren = section.children;

    setInputValues({
      ...inputValues,
      [deleteClass]: {
        ...section,
        children: [deleteChild(sectionChildren, deleteId)],
      },
    });
  }

  return (
    <>
      <img src={fluidtwo} className="fluidTopRight" />
      <img src={fluidtwo} className="fluidTop" />
      <img src={fluidtwo} className="fluidTopLeft" />
      <Header className="title" titleText="Resume Generator" />
      <main>
        <form className="application">
          <PersonalInformation
            onChange={handleInput}
            inputValues={inputValues}
            onClick={handleAddInputs}
            onInvalid={handleInvalid}
          />
          <Education
            onChange={handleInput}
            inputValues={inputValues}
            onClick={handleAddInputs}
            onDelete={handleDelete}
            onInvalid={handleInvalid}
          />
          <Experience
            onChange={handleInput}
            inputValues={inputValues}
            onClick={handleAddInputs}
            onDelete={handleDelete}
            onInvalid={handleInvalid}
          />
          <div className="submit">
            <Button
              id="submit"
              type="submit"
              value="submit"
              text="Submit"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </main>
      <footer>
        <h1>Tiago Sobral</h1>
        <button className="gitHub">
          <a href=""></a>
        </button>
        {/* <img className="fluidBottom" src={fluid} /> */}
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

function updateChildrenValues(childrenArray, id, value, dataKey) {
  return childrenArray.map((element) =>
    element.id == dataKey ? { ...element, [id]: value } : element
  );
}

function deleteChild(array, id) {
  return array.filter((child) => child.id != id);
}

function hasErrors(value) {
  let errors;
  Array.isArray(value)
    ? (errors = value.map((child) => Object.values(child)))
    : (errors = Object.values(value));
  let foundError = errors.filter((value) => value != '');
  return foundError.length > 0 ? true : false;
}

export { CvApplication, Header };
