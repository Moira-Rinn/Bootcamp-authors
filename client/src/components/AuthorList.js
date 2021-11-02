import React from 'react';
import { Link } from '@reach/router';
import NavBtns from './btns/NavBtns';
import AddAuthorBtn from './btns/AddAuthorBtn';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const AuthorList = (props) => {
  const { list, removeFromDom } = props;

  list.sort(function (a, b) {
    let nameA = a.authorLastName.toUpperCase();
    let nameB = b.authorLastName.toUpperCase();
    if (nameA < nameB) { return -1; }
    if (nameA > nameB) { return 1; }
    return 0;
  });

  const useStyles = makeStyles((theme) => ({
    container: {
      width: '99%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: theme.spacing(2),
    },
    wrapper: {
      width: '95%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: theme.spacing(2),
    },
    card: {
      width: '75%',
      backgroundColor: '#d7a8e6',
      margin: '.25%',
      padding: '.25%',
    },
    orangeCard: {
      width: '99%',
      maxHeight: '3vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: '3px solid #29002e',
      borderRadius: '5px',
      backgroundColor: '#e38d68',
    },
    txtColor: {
      padding: '0 10px',
      marginTop: '2px',
      display: 'flex',
      color: '#000',
      textDecoration: 'none'
    }
  }));

  const classes = useStyles();
  const { card, orangeCard, txtColor, container, wrapper } = classes;

  return (
    <div className={container}>
      <div className={wrapper}>
        <h2>Authors:</h2>
        <AddAuthorBtn />
      </div >

      {list.map((author, idx) => {
        return (
          <Card key={idx} className={card}>
            <CardContent className={orangeCard}>
              <Link className={txtColor} to={`/authors/${author._id}`}>
                <h3>{author.authorFirstName} {author.authorLastName}</h3>
              </Link>
              <NavBtns id={author._id} successCallback={() => removeFromDom(author._id)} />
            </CardContent>
          </Card>
        )
      })}
    </div >
  )
}

export default AuthorList;