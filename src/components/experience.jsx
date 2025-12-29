import GroupInputFields from './inputs';
import { Header } from './cv-application';
import Button from './buttons';

export default function Experience({ onChange, inputValues, onClick }) {
  return (
    <fieldset className="experience">
      <Header className="title" titleText="Work Experience" />
      {inputValues.experience.children.map((inputsGroup) => (
        <GroupInputFields
          onChange={onChange}
          inputValues={inputValues}
          className="experience"
          key={inputsGroup.id}
        />
      ))}
      <Button value="Add" onClick={onClick} className="experience" />
    </fieldset>
  );
}
