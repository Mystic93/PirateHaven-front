interface ButtonProps {
  type?: "button" | "submit";
  className?: string;
  actionOnClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  text?: string;
  children?: React.ReactElement;
}

const Button = ({
  type,
  className,
  actionOnClick,
  disabled,
  ariaLabel,
  text,
  children,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      type={type}
      className={className}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={actionOnClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
