function Input({ type = 'text', id, text, onChange, inputValues }) {
	return (
		<p>
			<label htmlFor={id}>{text}</label>
			<input type={type} id={id} onChange={onChange} value={inputValues[id]} />
		</p>
	);
}

export default function GroupInputFields({ dataInfo, onChange, inputValues }) {
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

	return dataInfo.map((value) => (
		<Input
			type={findType(value.id)}
			id={value.id}
			text={value.title}
			onChange={onChange}
			inputValues={inputValues}
		/>
	));
}
