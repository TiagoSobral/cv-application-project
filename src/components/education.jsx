import GroupInputFields from './inputs';
import { Header } from './cv-application';
import Button from './buttons';

export default function Education({
  inputValues,
  errors,
  onChange,
  onClick,
  onDelete,
  onBlur,
}) {
  return (
    <fieldset className="education">
      <Header className="title" titleText="Education" />
      {inputValues.map((inputsGroup) => (
        <GroupInputFields
          key={inputsGroup.id}
          className="education"
          groupInfo={inputsGroup}
          groupId={inputsGroup.id}
          errors={errors}
          onChange={onChange}
          onDelete={onDelete}
          onBlur={onBlur}
        />
      ))}
      <Button value="Add" text="Add" onClick={onClick} className="education" />
    </fieldset>
  );
}
