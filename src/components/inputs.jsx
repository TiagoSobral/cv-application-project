import { dataElementGeneration } from './data';
import Button from './buttons';

function Input({ inputInfo, className = 'personalInfo', groupId, onChange }) {
  const valueId = inputInfo[0];
  const inputValue = inputInfo[1];
  const labelText = dataElementGeneration[className][valueId];
  const inputType = findType(valueId);

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
        required
      />
    </p>
  );
}

function JobDescription({ groupId, onChange }) {
  return (
    <p>
      <label htmlFor="jobDescription">Description: </label>
      <textarea
        name="jobDescription"
        id="jobDescription"
        data-key={groupId}
        onChange={onChange}
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
}) {
  return (
    <div className="inputs">
      {Object.entries(groupInfo).map((value) => {
        const valueId = value[0];
        if (valueId === 'description')
          return <JobDescription onChange={onChange} groupId={groupId} />;
        if (valueId != 'id')
          return (
            <Input
              inputInfo={value}
              onChange={onChange}
              className={className}
              groupId={groupId}
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
