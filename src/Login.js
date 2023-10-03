

import { Paper, Grid, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

function Login({ clickHandler }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField
              required
              label='Username'
              type={'email'}
              onChange={(event) => setUsername(event.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label='Password'
              type={'password'}
              minLength={'8'}
              onChange={(event) => setPassword(event.target.value)}
            ></TextField>
          </Grid>
          <Typography variant='body2' color={'secondary'}>
            {message}
          </Typography>
          <Typography variant='body2'>Forgot username or password?</Typography>

          <Grid item xs={12}>
            <Button
              color='primary'
              variant='contained'
              fullWidth
              size='large'
              onClick={handleLogin()}
            >
              Login
            </Button>
          </Grid>
          <Typography variant='body1' gutterBottom>
            OR
          </Typography>

          <Grid item xs={12}>
            <Button
              variant='contained'
              onClick={() => {
                clickHandler('Signup');
              }}
            >
              Create New Account
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );

  function handleLogin() {
    return () => {
      if (username === 'Arasi' && password === 'Dobariya') {
        clickHandler('App');
      } else {
        setMessage('Invalid username and password');
      }
    };
  }
}
export default Login;
