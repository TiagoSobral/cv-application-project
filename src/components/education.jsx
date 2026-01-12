import GroupInputFields from './inputs';
import { Header } from './cv-application';
import Button from './buttons';

export default function Education({
  onChange,
  inputValues,
  onClick,
  onDelete,
  onBlur,
}) {
  return (
    <fieldset className="education">
      <Header className="title" titleText="Education" />
      {inputValues.education.map((inputsGroup) => (
        <GroupInputFields
          key={inputsGroup.id}
          className="education"
          groupInfo={inputsGroup}
          groupId={inputsGroup.id}
          onChange={onChange}
          onDelete={onDelete}
          onBlur={onBlur}
        />
      ))}
      <Button value="Add" text="Add" onClick={onClick} className="education" />
    </fieldset>
  );
}
