import React from 'react';
import { Link } from '@reach/router';
import DeleteBtn from './DeleteBtn';
import { Button } from '@material-ui/core';
import { Card, CardContent } from '@material-ui/core';

const AuthorList = (props) => {
  const { list, removeFromDom } = props;

  list.sort(function (a, b) {
    let nameA = a.authorLastName.toUpperCase();
    let nameB = b.authorLastName.toUpperCase();
    if (nameA < nameB) { return -1; }
    if (nameA > nameB) { return 1; }
    return 0;
  });

  return (
    <div>
      <div>
        <h2>Authors:</h2>
        <Link to={`/authors/add`}><Button variant='outlined' size='small'>Add Author</Button></Link>

        {list.map((author, idx) => {
          return (
            <Card key={idx}>
              <CardContent >
                {/* <p>ID: <Link to={`/authors/${author._id}`}>{author._id}</Link></p> */}
                <p>Author Name: <Link to={`/authors/${author._id}`}>{author.authorFirstName} {author.authorLastName}</Link></p>
                <DeleteBtn id={author._id} successCallback={() => removeFromDom(author._id)} />
                <Link to={`/authors/${author._id}/edit`}>
                  <Button variant='outlined' size='small' > Edit </Button>
                </Link>
              </CardContent>
            </Card>
          )
        })}

      </div>
    </div >
  )
}
export default AuthorList;