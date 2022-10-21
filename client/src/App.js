import './App.css';

import { Link, Navigate, Route, Routes } from 'react-router-dom';

import { AllAuthors } from './views/AllAuthors';
import { OneAuthor } from './views/OneAuthor';
import { NewAuthor } from './views/NewAuthor';
import { EditAuthor } from './views/EditAuthor';
import { NotFound } from './views/NotFound';

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1 className="navbar-brand mb-0">Favourite Authors</h1>
        <div className="navbar-nav justify-content-between">
          <Link
            to="/authors"
            className="btn btn-sm btn-outline-primary mx-1"
          >
            All Authors
          </Link>
          <Link
            to="/authors/new"
            className="btn btn-sm btn-outline-info mx-1"
          >
            Add a New Author
          </Link>
        </div>
      </nav>

      {/*
      Front-end routes to display view components.
      these are separate from our server routes.
      */}
      <Routes>
        {/* Redirect example */}
        <Route path="/" element={<Navigate to="/authors" replace />} />
        <Route path="/authors" element={<AllAuthors />} />
        <Route path="/authors/:id/edit" element={<EditAuthor />} />
        <Route path="/authors/:id" element={<OneAuthor />} />
        <Route path="/authors/new" element={<NewAuthor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;