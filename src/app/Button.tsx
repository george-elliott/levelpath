import Button from '@mui/material/Button';

interface Props {
  onClick: () => void;
}

export default function FetchButton(props: Props) {
  return (
    <Button variant="contained" onClick={props.onClick}>Load Birthdays</Button>
  )
}