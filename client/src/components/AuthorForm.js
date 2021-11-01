import React, { useState } from 'react';
import { Link } from '@reach/router';
import { Button } from '@material-ui/core';

const AuthorForm = (props) => {
  const { initialAuthorFirstName, initialAuthorLastName, onSubmitProp } = props;
  const [authorFirstName, setAuthorFirstName] = useState(initialAuthorFirstName);
  const [authorLastName, setAuthorLastName] = useState(initialAuthorLastName);

  const onSubmitHandler = e => {
    e.preventDefault();
    onSubmitProp({ authorFirstName, authorLastName });
    setAuthorFirstName(initialAuthorFirstName);
    setAuthorLastName(initialAuthorLastName);
  }

  return (
    <div>
      <h1>New Author:</h1>
      <form onSubmit={onSubmitHandler}>

        <p>
          <label>Author Fist Name</label><br />
          <input type="text"
            name="AuthorFirstName"
            value={authorFirstName}
            onChange={(e) => { setAuthorFirstName(e.target.value) }} />
        </p>

        <p>
          <label>Author Last Name</label><br />
          <input type="text"
            name="AuthorLastName"
            value={authorLastName}
            onChange={(e) => { setAuthorLastName(e.target.value) }} />
        </p>

        <Button variant='outlined' size='small' type="submit" value='Submit'>Submit</Button>
        <Link to={`/authors/`}><Button variant='outlined' size='small'>Back</Button></Link>
      </form>
    </div>
  )
}
export default AuthorForm;