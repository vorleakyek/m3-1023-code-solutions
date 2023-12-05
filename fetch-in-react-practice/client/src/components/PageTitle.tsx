type Props = {
  text: string;
};
export function PageTitle({ text }: Props) {
  return <h1 className="mb-4">{text}</h1>;
}
