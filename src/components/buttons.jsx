export default function Button({
  type = 'button',
  value,
  text = '',
  className,
  onClick,
}) {
  return (
    <button className={className} type={type} value={value} onClick={onClick}>
      {text}
    </button>
  );
}
