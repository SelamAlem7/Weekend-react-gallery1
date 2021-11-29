import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import {useState} from 'react';
import GalleryList from '../GalleryList/GalleryList.jsx';





function App() {
  // -------------Starting useEffect-----------------------------
  useEffect(() => {
    fetchData();
  }, []); 
// -------------Ending useEffect-----------------------------

// -------------Starting galleryList-----------------------------
    const [galleryList, SetGalleryList] = useState([]);
// -------------Ending galleryList------------------------------

// -------------Starting axios GET-----------------------------
  const fetchData = () => {
    axios.get('/gallery')
    .then((response) => {
      console.log('GET response:', response.data);
      SetGalleryList(response.data);

    }).catch((error) => {
      alert('Error getting data' )
      console.log('GET route', error);
    })
  };
// -------------Ending axios GET-----------------------------

// -------------Starting axios PUT-----------------------------
  const addLike = (event) => {
    const photoId = event.target.id;
    console.log(photoId);

axios.put(`/gallery/like/${photoId}`)
  .then((response) => {
    console.log('in PUT likes', response);
    fetchData();

  }).catch((error) => {
    console.log('Error in PUT', error);
  });
};
// -------------Ending axios PUT-----------------------------

// -------------Starting App return-----------------------------


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList gallery={galleryList} addLike={addLike} />

      </div>
    );
}

  export default App;
