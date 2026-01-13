import GroupInputFields from './inputs';
import { Header } from './cv-application';
import Button from './buttons';

export default function Experience({
  inputValues,
  errors,
  onChange,
  onClick,
  onDelete,
  onBlur,
}) {
  return (
    <fieldset className="experience">
      <Header className="title" titleText="Experience" />
      {inputValues.map((inputsGroup) => (
        <GroupInputFields
          key={inputsGroup.id}
          className="experience"
          groupInfo={inputsGroup}
          groupId={inputsGroup.id}
          errors={errors}
          onChange={onChange}
          onDelete={onDelete}
          onBlur={onBlur}
        />
      ))}
      <Button value="Add" text="Add" onClick={onClick} className="experience" />
    </fieldset>
  );
}
