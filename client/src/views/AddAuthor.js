import React, { useState } from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { navigate } from '@reach/router';

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
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
      })
  }

  return (
    <div>
      <h1>New Author:</h1>
      {errors.map((err, index) => <p key={index}>{err}</p>)}
      <AuthorForm
        onSubmitProp={addAuthor}
        initialAuthorFirstName={""}
        initialAuthorLastName={""}
      />
    </div>
  )
}

export default AddAuthor;