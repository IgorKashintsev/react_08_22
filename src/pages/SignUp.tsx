import { CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/firebase";



export const SignUp: FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      await signUp (login, password);
      navigate('/signin');
    } catch (err) {
      if(err instanceof Error) {
        setError(err.message);
      } else {
        setError('error');
      } 
    } finally {
      setLoading(false);
    }
  };

  return(
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <p>Login:</p>
        <TextField
          sx={{width: 400}}
          style={{marginTop: '25px'}}
          variant="outlined"
          type="email"
          onChange={(e) => setLogin(e.target.value)}
          value={login}
        />
        <p>Password:</p>
        <TextField
          sx={{width: 400}}
          style={{marginTop: '25px'}}
          variant="outlined"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br/>
        <Button
          type='submit'
          disabled={!(password && login)}
          sx={{height: 56}}
          style={{marginTop: '25px'}}
          variant="contained"
          >Create User
        </Button>
      </form>
      {loading && <CircularProgress />}
      {error && <p style={{color: "red"}}>{error}</p>}
    </>
  );
};