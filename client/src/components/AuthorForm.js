import React, { useState } from 'react';
import { navigate } from '@reach/router';
import SubmitBtn from './btns/SubmitBtn';
import BackBtn from './btns/BackBtn';
import DeleteBtn from './btns/DeleteBtn';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import { Card } from '@material-ui/core';

const AuthorForm = (props) => {
  const { initialAuthorFirstName, initialAuthorLastName, onSubmitProp, id } = props;
  const [authorFirstName, setAuthorFirstName] = useState(initialAuthorFirstName);
  const [authorLastName, setAuthorLastName] = useState(initialAuthorLastName);

  const onSubmitHandler = e => {
    e.preventDefault();
    onSubmitProp({ authorFirstName, authorLastName });
    setAuthorFirstName(initialAuthorFirstName);
    setAuthorLastName(initialAuthorLastName);
  }

  const useStyles = makeStyles((theme) => ({
    container: {
      textAlign: 'left',
      backgroundColor: '#d7a8e6',
      padding: theme.spacing(1),
      border: '3px solid #29002e',
      borderRadius: '5px'
    },
    wrapper: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(2),
    },
    card: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '80%',
      backgroundColor: '#d7a8e6',
      margin: '.25%',
      padding: '.25%',
      borderRadius: '5px'
    },
    orangeCard: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '55%',
      border: '1px solid #29002e',
      borderRadius: '5px',
      padding: '10px',
      margin: '10px',
      backgroundColor: '#e38d68',
    },
    txtColor: {
      padding: '10px',
      margin: '10px',
      display: 'flex',
      color: '#000',
      textDecoration: 'none'
    }
  }));

  const classes = useStyles();
  const { card, orangeCard, txtColor, container, wrapper } = classes;

  return (
    <div>
      <form className={container} onSubmit={onSubmitHandler}>
        <h2>Name:</h2>
        <div className={wrapper}>
          <Card className={card} >
            <Card className={orangeCard}>
              <TextField
                required
                id="outlined-required"
                label="First"
                name="AuthorFirstName"
                value={authorFirstName}
                onChange={(e) => { setAuthorFirstName(e.target.value) }}
                className={txtColor}
              />
              <TextField
                required
                id="outlined-required"
                label="Last"
                name="AuthorLastName"
                value={authorLastName}
                onChange={(e) => { setAuthorLastName(e.target.value) }}
                className={txtColor}
              />
            </Card>
            <div>
              <SubmitBtn />
              <BackBtn />
              {id ? <DeleteBtn id={id} successCallback={() => navigate(`/authors`)} /> : null}
            </div>
          </Card>
        </div>
      </form>
    </div>
  )
}

export default AuthorForm;