import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';

const AddAuthor = () => {
  const [authorList, setAuthorList] = useState([]);
  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   axios.get("http://localhost:8000/api/authors")
  //     .then(res => {
  //       setAuthorList(res.data.theAuthors);
  //       console.log(res.data.theAuthors)
  //       setLoaded(true);
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  const addAuthor = author => {
    axios.post('http://localhost:8000/api/authors', author)
      .then(res => {
        setAuthorList([...authorList, res.data])
      })
      .catch(err => console.log("this is the...", err));
  }

  // const removeFromDom = id => {
  //   setAuthorList(authorList.filter(author => author._id !== id));
  // }

  return (
    <div>
      <AuthorForm
        onSubmitProp={addAuthor}
        initialAuthorFirstName={""}
        initialAuthorLastName={""}
      />
    </div>
  )
}

export default AddAuthor;