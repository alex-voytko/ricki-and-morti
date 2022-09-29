interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  name: string;
  className?: string;
}

function Button({ onClick, className = "btn", name }: ButtonProps) {
  return (
    <button onClick={onClick} className={className}>
      {name}
    </button>
  );
}

export default Button;
