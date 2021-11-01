import React from 'react'
import axios from 'axios';
import { Button } from '@material-ui/core';

const DeleteBtn = (props) => {
  const { id, successCallback } = props;

  const deleteAuthor = e => {
    axios.delete(`http://localhost:8000/api/authors/${id}`)
      .then(res => {
        successCallback();
      })
      .catch(err => console.log(err));
  }

  return (
    <Button variant='outlined' size='small' onClick={deleteAuthor}>
      Delete
    </Button>
  )
}
export default DeleteBtn;