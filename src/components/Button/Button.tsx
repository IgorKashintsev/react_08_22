import MuiButton from '@mui/material/Button';
import {FC} from 'react';

interface ButtonProps {
  disabled?: boolean;
  click?: () => void;
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({
  disabled = false,
  click = () => null,
  children,
}) => (
  <MuiButton
      sx={{width: 400}}
      disabled={disabled}
      onClick={click}
      variant="contained"
      type='submit'
      data-testid='button'
    >
    {children}
  </MuiButton>
);