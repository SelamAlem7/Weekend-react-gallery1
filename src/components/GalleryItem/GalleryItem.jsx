import {useState} from 'react';

// ------------STARTING GalleryItem function-----------------------------
function GalleryItem ({pic, addLike}){
    //click handler:
    const [onClick, setOnClick] = useState(0);
    const onClickHandle = () => {
        if (onClick % 2 === 0) {
            return <img src={pic.path} />;

        } else{
            return <p> {pic.description}</p>
        }
    };


return (
    <div className="pics">
      {' '}
      <div
        className="imageStore"
        key={pic.id}
        onClick={() => setOnClick(onClick + 1)}
      >
        {onClickHandle()}{''}
      </div>
      <div>
        {''}
        <button onClick={addLike} id={pic.id}>
          L♥️VE
        </button>{''}
      </div>
      <div>There are {pic.likes} likes on this post!</div>
    </div>
  );





}
// ------------ENDING GalleryItem function-----------------------------

export default GalleryItem;