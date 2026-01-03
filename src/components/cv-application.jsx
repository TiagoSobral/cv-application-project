import PersonalInformation from './personal-info';
import Education from './education';
import Experience from './experience';
import Button from './buttons';
import { educationChild, experienceChild } from './data';
import fluid from '../assets/fluid.png';
import fluidtwo from '../assets/fluid-two.png';

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
      <img src={fluidtwo} className="fluidTop" />
      <Header className="title" titleText="Resume Generator" />
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
            onDelete={handleDelete}
          />
          <Experience
            onChange={handleInput}
            inputValues={inputValues}
            onClick={handleAddInputs}
            onDelete={handleDelete}
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
      </footer>
      <img className="fluidBottom" src={fluid} />
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

export { CvApplication, Header };
