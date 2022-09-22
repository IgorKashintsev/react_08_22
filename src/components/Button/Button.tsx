import MuiButton from '@mui/material/Button';
import {FC} from 'react';

interface ButtonProps {
  label: string;
  disabled?: boolean;
  click?: () => void;
}

export const Button: FC<ButtonProps> = ({label, disabled = false, click = () => null}) => (
  <MuiButton
      sx={{width: 400}}
      disabled={disabled}
      onClick={click}
      variant="contained"
      type='submit'>
    {label}
  </MuiButton>
);