interface TitleProps {
  text: string;
  priority?: number;
  className?: string;
}

function Title({ priority = 2, text, className = "title" }: TitleProps) {
  const TitleTag = `h${priority}` as keyof JSX.IntrinsicElements;
  return <TitleTag className={className}>{text}</TitleTag>;
}
export default Title;
