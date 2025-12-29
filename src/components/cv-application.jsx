import PersonalInformation from './personal-info';
import Education from './education';
import Experience from './experience';
import Button from './buttons';

function CvApplication({ inputValues, setInputValues, setPage }) {
  function handleInput(e) {
    const className = e.target.className;
    const id = e.target.id;
    const value = e.target.value;

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
            children: updateChildrenValues(eduChildren, id, value),
          },
        });
        break;
      }
      case 'experience': {
        const experience = inputValues.education;
        const expChildren = experience.children;
        setInputValues({
          ...inputValues,
          experience: {
            ...experience,
            children: updateChildrenValues(expChildren, id, value),
          },
        });
        break;
      }
    }
  }

  function handleAddInputs(e) {
    const className = e.target.className;

    if (className === 'education') {
      const education = inputValues.education;
      const children = inputValues.education.children;
      setInputValues({
        ...inputValues,
        education: {
          ...education,
          children: [
            ...children,
            {
              id: crypto.randomUUID(),
              schoolName: '',
              studyCertification: '',
              studyDate: '',
            },
          ],
        },
      });
    } else {
      const experience = inputValues.experience;
      const children = inputValues.experience.children;
      setInputValues({
        ...inputValues,
        experience: {
          ...experience,
          children: [
            ...children,
            {
              id: crypto.randomUUID(),
              schoolName: '',
              studyCertification: '',
              studyDate: '',
            },
          ],
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

function updateChildrenValues(childrenArray, id, value) {
  let length = childrenArray.length;
  return childrenArray.map((element, index) =>
    index == length - 1 ? { ...element, [id]: value } : element
  );
}

export { CvApplication, Header };
