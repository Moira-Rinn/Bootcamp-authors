import React, { useState } from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { navigate } from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';

const AddAuthor = () => {
  const [authorList, setAuthorList] = useState([]);
  const [errors, setErrors] = useState([]);

  const addAuthor = (author) => {
    axios.post('http://localhost:8000/api/authors', author)
      .then(res => {
        setAuthorList([...authorList, res.data])
        navigate(`/authors`);
      })
      .catch(err => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr);
      })
  }

  const useStyles = makeStyles((theme) => ({
    container: {
      textAlign: 'left',
      backgroundColor: '#eadaf2',
      padding: theme.spacing(1),
      borderRadius: '5px'
    },
    txtColor: {
      padding: '10px',
      margin: '10px',
      color: '#29002e',
    }
  }));

  const classes = useStyles();
  const { txtColor, container } = classes;

  return (
    <Card className={container}>
      <h2 className={txtColor}>Add New Author:</h2>
      {errors.map((err, index) => <p key={index}>{err}</p>)}
      <AuthorForm
        onSubmitProp={addAuthor}
        initialAuthorFirstName={""}
        initialAuthorLastName={""}
      />
    </Card>
  )
}

export default AddAuthor;