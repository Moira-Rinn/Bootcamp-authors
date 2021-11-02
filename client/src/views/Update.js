import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm';
import DeleteBtn from '../components/DeleteBtn';

const Update = (props) => {
  const { id } = props;
  const [author, setAuthor] = useState();
  const [errors, setErrors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors/${id}`)
      .then(res => {
        setAuthor(res.data);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, [id]);

  const updateAuthor = author => {
    axios.put(`http://localhost:8000/api/authors/${id}`, author)
      .then(res => {
        console.log(res);
        navigate(`/authors/`);
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
      <h1>Update Author:</h1>
      {errors.map((err, index) => <p key={index}>{err}</p>)}
      {loaded && (
        <AuthorForm
          onSubmitProp={updateAuthor}
          initialAuthorFirstName={author.authorFirstName}
          initialAuthorLastName={author.authorLastName}
        />

      )}

      <DeleteBtn id={id} successCallback={() => navigate(`/authors`)} />
    </div>
  )
}

export default Update;