import GalleryItem from '../GalleryItem/GalleryItem.jsx';


// -------------Starting GalleryList function-----------------------------

function GalleryList({gallery, addLike}) {
    return (
        <div> 
            {''}
            {gallery.map((pic, index) => { //map() G.
                return <GalleryItem pic={pic} 
                        key={index} 
                        addLike={addLike} />; //end GI.
            })}
        </div>
    )
    
};
// -------------Ending GalleryList function-----------------------------

export default GalleryList;
