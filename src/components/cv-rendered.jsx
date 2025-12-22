import '../styles/cv-rendered.css';
import { Button } from './cv-application';

export default function CvRendered() {
	return (
		<>
			<AboutMe
				firstName="Tiago"
				LastName="Sobral"
				email="tiagosvaratojo@gmail.com"
				phoneNumber="+1 647 762 0056"
			/>
			<RenderedEducation
				title="Education"
				schoolName="Estoril Universitiy of Hotel & Tourism Studies"
				date="2017"
				type="Bacherlor - Hotel Management"
			/>
			<RenderedWork />
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
			<Button id="eduBtn" value="edit" />
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
			<Button id="workBtn" value="edit" />
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
