import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorList from '../components/AuthorList';
import { makeStyles } from '@material-ui/core/styles';

const Main = () => {
  const [authorList, setAuthorList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/authors")
      .then(res => {
        setAuthorList(res.data.theAuthors);
        console.log(res.data.theAuthors)
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

  const removeFromDom = id => {
    setAuthorList(authorList.filter(author => author._id !== id));
  }

  const useStyles = makeStyles((theme) => ({
    card: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#d7a8e6',
      margin: theme.spacing(1),
      borderRadius: '10px'
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.card}>
      {
        loaded && <AuthorList
          list={authorList}
          removeFromDom={removeFromDom}
        />
      }
    </div>
  )
}

export default Main;