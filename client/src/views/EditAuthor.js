import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import {
  getAuthorById,
  updateAuthorById,
} from '../services/InternalApiService';

export const EditAuthor = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    getAuthorById(id)
      .then((data) => {
        setName(data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleEditAuthorSubmit = (event) => {
    event.preventDefault();

    const editedAuthor = {
      name: name,
    };

    updateAuthorById(id, editedAuthor)
      .then((updatedAuthor) => {
        console.log('updatedAuthor:', updatedAuthor);
        navigate(`/authors/${id}`);
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
      <h2>Edit this author</h2>
      <form onSubmit={(e) => handleEditAuthorSubmit(e)}>
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
            value={name}
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

export default EditAuthor;