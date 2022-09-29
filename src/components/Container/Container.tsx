interface ContainerProps {
  children?: React.ReactNode;
  htmlTag?: keyof JSX.IntrinsicElements;
  className?: string;
}

function Container({
  htmlTag = "div",
  children,
  className = "container",
}: ContainerProps) {
  const WrapperTag = htmlTag;

  return <WrapperTag className={className}>{children}</WrapperTag>;
}

export default Container;
