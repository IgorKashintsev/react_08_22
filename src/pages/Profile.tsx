import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, toggleProfile } from "../store/profile/slice";
import TextField from '@mui/material/TextField';
import MuiButton from '@mui/material/Button';
import { selectName, selectVisible } from "../store/profile/selectors";


export const Profile: FC = () => {

  const dispatch = useDispatch();

  const name = useSelector(selectName);
  const visible = useSelector(selectVisible);
  const [value, setValue] = useState('');

  return (
    <>
      <h2>Profile page</h2>
      <p>name: {name}</p>
      <p>visible:</p>
      <input
        type="checkbox"
        checked={visible}
        readOnly
      />
      <button onClick={() => dispatch(toggleProfile())}>Change visible</button>
      <br />
      <TextField
          sx={{width: 400}}
          style={{marginTop: '25px'}}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="Enter your name"
          variant="outlined"
          autoFocus
          inputProps={{'data-testid': 'input'}}
        />
      <MuiButton
          sx={{height: 56}}
          style={{marginTop: '25px'}}
          disabled={!value}
          onClick={() => dispatch(changeName(value))}
          variant="contained"
          data-testid='button'
        >
        Change name
      </MuiButton>
    </>
  );
};