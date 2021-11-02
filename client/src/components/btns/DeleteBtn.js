import React from 'react'
import axios from 'axios';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteBtn = (props) => {
  const { id, successCallback } = props;

  const deleteAuthor = e => {
    axios.delete(`http://localhost:8000/api/authors/${id}`)
      .then(res => {
        successCallback();
      })
      .catch(err => console.log(err));
  }

  const useStyles = makeStyles((theme) => ({

    btn: {
      margin: '0 2px',
      color: '#000',
      background: '#d61818',
      border: '2px solid black',
      borderRadius: '500px'
    }
  }));

  const classes = useStyles();
  const { btn } = classes;

  return (
    <Button variant='outlined' size='small' onClick={deleteAuthor} className={btn}>
      <DeleteIcon />
    </Button>
  )
}

export default DeleteBtn;