function Input({
  type = 'text',
  id,
  text,
  onChange,
  inputValues,
  className = 'personalInfo',
}) {
  return (
    <p>
      <label htmlFor={id}>{text}</label>
      <input
        type={type}
        id={id}
        onChange={onChange}
        value={inputValues[id]}
        className={className}
      />
    </p>
  );
}

function JobDescription({ onChange }) {
  return (
    <p>
      <label htmlFor="jobDescription">Description: </label>
      <textarea
        name="jobDescription"
        id="jobDescription"
        onChange={onChange}
      ></textarea>
    </p>
  );
}

export default function GroupInputFields({
  dataInfo,
  onChange,
  inputValues,
  className,
}) {
  // helper function that returns the type of input correspondent to the id received.
  function findType(id) {
    switch (id) {
      case 'email':
        return 'email';
      case 'phoneNumber':
        return 'tel';
      case 'studyDate':
        return 'number';
      case 'workDateStart':
        return 'month';
      case 'workDateEnd':
        return 'month';
      default:
        return 'text';
    }
  }

  return (
    <div className="inputs">
      {dataInfo.map((value) =>
        value.id === 'jobDescription' ? (
          <JobDescription onChange={onChange} />
        ) : (
          <Input
            type={findType(value.id)}
            id={value.id}
            text={value.title}
            onChange={onChange}
            inputValues={inputValues}
            className={className}
          />
        )
      )}
    </div>
  );
}
