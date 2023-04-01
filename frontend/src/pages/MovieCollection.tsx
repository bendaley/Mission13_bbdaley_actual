// import { useState } from 'react';
import data from '../MovieData.json';
import Layout from './Layout';

const mds = data.MovieDataList;

function FullMovieList() {
  // const [listOfMovies, setListOfMovies] = useState(mds);

  return (
    <>
      <div>
        <Layout />
        <div>
          <h1 className="text-center">Joel Hilton's Full Movie Collection</h1>
          <br></br>
        </div>
        <div className="container text-center">
          <table className="table align-self-center table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Category</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody>
              {mds.map((m) => (
                <tr key={m.Title}>
                  <td>{m.Title}</td>
                  <td>{m.Year}</td>
                  <td>{m.Director}</td>
                  <td>{m.Rating}</td>
                  <td>{m.Category}</td>
                  <td>{m.Edited}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default FullMovieList;
