import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  deleteAuthorById,
  getAuthorById,
} from '../services/InternalApiService';

export const OneAuthor = (props) => {
  const [author, setAuthor] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAuthorById(id)
      .then((data) => {
        console.log(data);
        setAuthor(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (author === null) {
    return null;
  }

  const handleDeleteClick = () => {
    deleteAuthorById(id)
      .then((deletedAuthor) => {
        navigate('/authors');
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const { name } =
    author;

  return (
    <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
      <h5>Author:</h5>
      <h4>{name}</h4>

      <div className="mt-2">
        <button
          onClick={(e) => {
            handleDeleteClick();
          }}
          className="btn btn-sm btn-outline-danger mx-1"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default OneAuthor;