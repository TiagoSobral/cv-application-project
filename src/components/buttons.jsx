export default function Button({
  type = 'button',
  value,
  text = '',
  className,
  dataId = 'page',
  onClick,
}) {
  return (
    <button
      className={className}
      data-id={dataId}
      type={type}
      value={value}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
