import PersonalInformation from './personal-info';
import Education from './education';
import Experience from './experience';
import Button from './buttons';
import { educationChild, experienceChild } from './data';

function CvApplication({ inputValues, setInputValues, setPage }) {
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

  function handleSubmit(e) {
    e.preventDefault();
    setPage(1);
  }

  return (
    <>
      <Header className="title" titleText="CV Application" />
      <main>
        <form className="application">
          <PersonalInformation
            onChange={handleInput}
            inputValues={inputValues}
            onClick={handleAddInputs}
          />
          <Education
            onChange={handleInput}
            inputValues={inputValues}
            onClick={handleAddInputs}
          />
          <Experience
            onChange={handleInput}
            inputValues={inputValues}
            onClick={handleAddInputs}
          />
          <Button
            id="submit"
            type="submit"
            value="submit"
            text="Submit"
            onClick={handleSubmit}
          />
        </form>
      </main>
    </>
  );
}

function Header({ className, titleText }) {
  return <h1 className={className}>{titleText}</h1>;
}

function updateChildrenValues(childrenArray, id, value, dataKey) {
  return childrenArray.map((element) =>
    element.id == dataKey ? { ...element, [id]: value } : element
  );
}

export { CvApplication, Header };
