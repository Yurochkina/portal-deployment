import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { createAuthor } from '../services/InternalApiService';

export const NewAuthor = (props) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [errors, setErrors] = useState(null);

  const handleNewAuthorSubmit = (event) => {
    event.preventDefault();

    const newAuthor = {
      name: name,
    };

    createAuthor(newAuthor)
      .then((data) => {

        console.log('new author data:', data);
        navigate('/authors');
      })
      .catch((error) => {
        console.log(error);
        setErrors(error?.response?.data?.errors);
      });
  };

  return (
    <div className="w-50 p-4 rounded mx-auto shadow">
      <Link
            to="/authors"
          >
            Home
      </Link>
      <form onSubmit={(e) => handleNewAuthorSubmit(e)}>
        <div className="form-group">
          <label className="h6">Name</label>
          {errors?.name && (
            <span style={{ color: 'red' }}> {errors?.name?.message}</span>
          )}
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-sm btn-outline-success">Submit</button>
        <Link
            to="/authors"
            className="btn btn-sm btn-outline-danger"
          >
            Cancel
          </Link>
      </form>
    </div>
  );
};

export default NewAuthor;