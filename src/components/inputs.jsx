import { dataElementGeneration } from './data';
import Button from './buttons';

function Input({
  inputInfo,
  className = 'personalInfo',
  groupId,
  onChange,
  onInvalid,
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
        onInvalid={onInvalid}
        required
      />
    </p>
  );
}

function JobDescription({ groupId, inputValue, onChange, onInvalid }) {
  return (
    <p>
      <label htmlFor="jobDescription">Description: </label>
      <textarea
        name="jobDescription"
        id="jobDescription"
        className="experience"
        data-key={groupId}
        onChange={onChange}
        onInvalid={onInvalid}
        defaultValue={inputValue}
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
  onInvalid,
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
              onInvalid={onInvalid}
            />
          );
        if (valueId != 'id')
          return (
            <Input
              inputInfo={value}
              onChange={onChange}
              className={className}
              groupId={groupId}
              onInvalid={onInvalid}
            />
          );
      })}
      {className != 'personalInfo' && (
        <Button
          value="delete"
          className={className}
          id={groupId}
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
