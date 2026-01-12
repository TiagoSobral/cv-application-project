import PersonalInformation from './personal-info';
import Education from './education';
import Experience from './experience';
import Button from './buttons';
import { education, experience } from './data';

function CvApplication({
  inputValues,
  setInputValues,
  setPage,
  errors,
  setErrors,
}) {
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
      let groupChildren = inputValues[className].children;
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
    } else {
      const newExperience = { ...experience, id: crypto.randomUUID() };
      setInputValues({
        ...inputValues,
        [className]: [...inputValues[className], newExperience],
      });
    }
  }

  /* returns the error message to each of their own error state */
  function handleOnBlur(e) {
    let className = e.target.className;
    let name = e.target.id;
    let groupId = e.target.dataset.key;
    let error = e.target.validationMessage;

    if (error === '') {
      return;
    } else if (className === 'personalInfo') {
      setErrors({
        ...errors,
        [className]: {
          ...errors[className],
          [name]: error,
        },
      });
    } else {
      setErrors({
        ...errors,
        [className]: updateValuesInGroup(
          errors[className].children,
          name,
          error,
          groupId
        ),
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPage(1);
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
        <form className="application" onSubmit={handleSubmit}>
          <PersonalInformation
            onChange={handleInput}
            inputValues={inputValues}
            onClick={handleAddInputs}
            onBlur={handleOnBlur}
          />
          <Education
            onChange={handleInput}
            inputValues={inputValues}
            onClick={handleAddInputs}
            onDelete={handleDelete}
            onBlur={handleOnBlur}
          />
          <Experience
            onChange={handleInput}
            inputValues={inputValues}
            onClick={handleAddInputs}
            onDelete={handleDelete}
            onBlur={handleOnBlur}
          />
          <div className="submit">
            <Button id="submit" type="submit" value="submit" text="Submit" />
          </div>
        </form>
      </main>
      <footer>
        <h1>©Tiago Sobral</h1>
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

function updateValuesInGroup(childrenArray, id, value, dataKey) {
  return childrenArray.map((element) =>
    element.id == dataKey ? { ...element, [id]: value } : element
  );
}

function deleteChild(array, id) {
  return array.filter((child) => child.id != id);
}

export { CvApplication, Header };
