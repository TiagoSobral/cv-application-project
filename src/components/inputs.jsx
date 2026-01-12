import { dataElementGeneration } from './data';
import Button from './buttons';

function Input({
  inputInfo,
  className = 'personalInfo',
  groupId,
  onChange,
  onBlur,
}) {
  const valueId = inputInfo[0];
  const inputValue = inputInfo[1];
  const labelText = dataElementGeneration[className][valueId];
  const inputType = findType(valueId);
  const example = placeHolder(valueId);
  return (
    <p>
      <label htmlFor={valueId}>{labelText}</label>
      <input
        type={inputType}
        id={valueId}
        value={inputValue}
        className={className}
        data-key={groupId}
        onChange={onChange}
        placeholder={example}
        onBlur={onBlur}
        required
      />
    </p>
  );
}

function JobDescription({ groupId, inputValue, onChange, onBlur }) {
  return (
    <p>
      <label htmlFor="jobDescription">Description: </label>
      <textarea
        name="description"
        id="description"
        className="experience"
        data-key={groupId}
        value={inputValue}
        onChange={onChange}
        onBlur={onBlur}
        required
      ></textarea>
    </p>
  );
}

export default function GroupInputFields({
  className,
  groupInfo,
  groupId,
  onChange,
  onDelete,
  onBlur,
}) {
  return (
    <div className="inputs">
      {Object.entries(groupInfo).map((value) => {
        const valueId = value[0];
        if (valueId === 'description')
          return (
            <JobDescription
              onChange={onChange}
              groupId={groupId}
              inputValue={value[1]}
              onBlur={onBlur}
            />
          );
        if (valueId != 'id' && valueId != 'errors')
          return (
            <Input
              inputInfo={value}
              onChange={onChange}
              className={className}
              groupId={groupId}
              onBlur={onBlur}
            />
          );
      })}
      {className != 'personalInfo' && (
        <Button
          value="delete"
          className={className}
          dataId={groupId}
          onClick={onDelete}
        />
      )}
    </div>
  );
}

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

function placeHolder(id) {
  switch (id) {
    case 'email':
      return 'name@example.com';
    case 'phoneNumber':
      return '+Code & Number';
    case 'studyCertification':
      return 'Bachelor';
  }
}
