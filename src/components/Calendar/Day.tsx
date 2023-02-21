interface Props {
  name: number | undefined,
}

const Day = ({name}: Props) => {
  return (<div>{name}</div>)
};

export default Day;
