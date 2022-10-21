import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  deleteAuthorById,
  getAllAuthors,
} from '../services/InternalApiService';

export const AllAuthors = (props) => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAllAuthors()
      .then((data) => {
        console.log(data);
        setAuthors(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeleteClick = (idToDelete) => {
    deleteAuthorById(idToDelete)
      .then((deletedAuthor) => {
        const filteredAuthors = authors.filter((author) => {
          return author._id !== idToDelete;
        });

        console.log('deletedAuthor:', deletedAuthor);
        setAuthors(filteredAuthors);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-50 mx-auto text-center">
      <h2>We have quotes by:</h2>

      {authors.map((author) => {
        const { _id, name } =
          author;

        return (
          <div key={_id} className="shadow mb-4 rounded border p-4">
            <table>
            <tr>
              <th>Author</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>
              <Link to={`/authors/${_id}`}>
                        <h4>{name}</h4>
                      </Link>
              </td>
              <td>
              <div className="mt-2">
              <button
                onClick={(e) => {
                  handleDeleteClick(_id);
                }}
                className="btn btn-sm btn-outline-danger mx-1"
              >
                Delete
              </button>

              <Link
                to={`/authors/${_id}/edit`}
                className="btn btn-sm btn-outline-warning mx-1"
              >
                Edit
              </Link>
            </div>
              </td>
            </tr>
            
          </table>
          </div>
        );
      })}

    </div>
  );
};

export default AllAuthors;