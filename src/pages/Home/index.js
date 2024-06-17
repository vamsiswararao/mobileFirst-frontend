import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../../Action/charactersActions';
//import {ClipLoader} from "react-spinners"
import {TailSpin} from "react-loader-spinner"

import "./index.css"
const Home = () => {
  const dispatch = useDispatch();
  const { characters, next, previous,isLoading } = useSelector(state => state.characters);
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]) 

  return (
    <div className='home-container'>{isLoading?
    (<div className="container mt-8">
      <h2 className="text-center">Star Wars Characters</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {characters.map(char => (
            <tr key={char.name}>
              <td>{char.name}</td>
              <td>{char.height}</td>
              <td>{char.mass}</td>
              <td>{char.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-buttons">
        <button className="btn btn-secondary" onClick={() => dispatch(fetchCharacters(previous))} disabled={!previous}>Previous</button>
        <button className="btn btn-secondary" onClick={() => dispatch(fetchCharacters(next))} disabled={!next}>Next</button>
      </div>
    </div>):(<div className='load'><TailSpin size={150} color={"#123abc"}/> </div>)}
    </div>
  );
};

export default Home;
