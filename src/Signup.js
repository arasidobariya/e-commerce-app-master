import {
  Paper,
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  OutlinedInput,
} from '@mui/material';
import { useState } from 'react';

function Signup({ clickHandler }) {
  const [userName, setName] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [prefernce, setPrefernce] = useState([]);
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');

  let months = [
    { id: 1, title: 'January' },
    { id: 2, title: 'February' },
    { id: 3, title: 'March' },
    { id: 4, title: 'April' },
    { id: 5, title: 'May' },
    { id: 6, title: 'June' },
    { id: 7, title: 'July' },
    { id: 8, title: 'August' },
    { id: 9, title: 'September' },
    { id: 10, title: 'October' },
    { id: 11, title: 'November' },
    { id: 12, title: 'December' },
  ];

  let days = Array.from(Array(31).fill(), (_, i) => i + 1);
  let departments = [
    'Groceries',
    'Hot-Meal',
    'Mobiles',
    'Sim-cards',
    'Jewelry',
  ];

  return (
    <div style={{ padding: 30 }}>
      <Paper component='form'>
        <div
          style={{
            textAlign: 'center',
            margin: '20px',
          }}
        >
          <Typography variant='h4' gutterBottom>
            Create Your New Account
          </Typography>
          <div
            style={{
              margin: '15px',
            }}
          >
            <TextField
              required
              label='Name'
              onChange={(event) => setName(event.target.value)}
            ></TextField>
          </div>
          <div
            style={{
              margin: '15px',
            }}
          >
            <TextField
              required
              label='Enter Your Email'
              onChange={(event) => setEmail(event.target.value)}
            ></TextField>
          </div>
          <div
            style={{
              margin: '15px',
            }}
          >
            <TextField
              required
              label='Password'
              type={'password'}
              onChange={(event) => setPassword(event.target.value)}
            ></TextField>
          </div>
          <div
            style={{
              margin: '15px',
            }}
          >
            <TextField
              required
              label='Confirmed Password'
              type={'password'}
            ></TextField>
          </div>

          <FormControl>
            <InputLabel>Birth Month </InputLabel>
            <Select
              value={month}
              label='Birth Month'
              style={{
                width: '200px',
                margin: '15px',
                marginLeft: '0',
              }}
              onChange={(event) => setMonth(event.target.value)}
            >
              {months.map((month) => {
                return (
                  <MenuItem key={month.id} value={month.title}>
                    {month.title}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>Birth Date</InputLabel>
            <Select
              value={date}
              label='Birth Date'
              style={{
                width: '200px',
                margin: '15px',
                marginLeft: '0',
              }}
              onChange={(event) => setDate(event.target.value)}
            >
              {days.map((day) => {
                return (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <div
            style={{
              margin: '15px',
            }}
          >
            <Typography variant='body1' gutterBottom>
              What I would like to purchase more on this website?
            </Typography>
            <FormControl>
              <InputLabel>Multiple Select</InputLabel>
              <Select
                multiple
                value={prefernce}
                label='prefernce'
                style={{
                  width: '500px',
                  margin: '15px',
                  marginLeft: '0',
                }}
                onChange={(event) => setPrefernce(event.target.value)}
                input={<OutlinedInput label='Multiple Select' />}
              >
                {departments.map((department) => (
                  <MenuItem key={department} value={department}>
                    {department}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div
            style={{
              margin: '15px',
            }}
          >
            <Button
              color='primary'
              variant='contained'
              onClick={() => {
                handleSignup();
              }}
            >
              SignUP
            </Button>
          </div>
          <Typography variant='body2' gutterBottom>
            Already have an account?
          </Typography>
        </div>
      </Paper>
    </div>
  );

  function handleSignup() {
    console.log(
      userName +
        ' ' +
        userEmail +
        ' ' +
        userPassword +
        ' ' +
        date +
        ' ' +
        month +
        ' ' +
        prefernce
    );
    return () => {};
  }
}
export default Signup;
