import '../styles/cv-rendered.css';
import '../index.css';
import Button from './buttons.jsx';

export default function CvRendered({ form, changePage, setValues }) {
	function handleEdit() {
		changePage(0);
		setValues(form);
	}

	return (
		<>
			<AboutMe
				firstName={form.firstName}
				LastName={form.lastName}
				email={form.email}
				phoneNumber={form.phoneNumber}
			/>
			<RenderedEducation
				title="Education"
				schoolName={form.schoolName}
				date={form.studyDate}
				type={form.studyCertification}
			/>
			<RenderedWork
				position={form.jobTitle}
				startDate={form.workDateStart}
				endDate={form.workDateEnd}
				companyName={form.companyName}
				description={form.jobDescription}
			/>
			<Button className="aboutBtn" value="edit" onClick={handleEdit} />
		</>
	);
}

function AboutMe({ firstName, LastName, email, phoneNumber }) {
	const emailLink = `mailito:${email}`;
	const phoneLink = `tel:${phoneNumber}`;
	return (
		<>
			<h1 className="personName">
				{firstName} {LastName}
			</h1>
			<ul className="contacts">
				<li>
					<a href={emailLink}>{email}</a>
				</li>
				<li>
					<a href={phoneLink}>{phoneNumber}</a>
				</li>
			</ul>
		</>
	);
}

function RenderedEducation({ title, schoolName, date, type }) {
	return (
		<>
			<h1>{title}</h1>
			<ul className="School">
				<li>
					<b>{schoolName}</b>
				</li>
				<li>{type}</li>
				<li>{date}</li>
			</ul>
		</>
	);
}

function RenderedWork({
	position,
	startDate,
	endDate,
	companyName,
	description,
}) {
	return (
		<>
			<h1>Work Experience</h1>
			<ul>
				<li>{position}</li>
				<li>
					{startDate} {endDate}
				</li>
				<li>{companyName}</li>
				<li>{description}</li>
			</ul>
		</>
	);
}
