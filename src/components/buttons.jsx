export default function Button({ type = 'button', value, text = '', onClick }) {
	return (
		<button type={type} value={value} onClick={onClick}>
			{text}
		</button>
	);
}
