import React, { useState } from 'react';
import './Gallery.css';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

// Import your images here
import Art1 from '../../public/imgs/Art1.jpg';
import Art2 from '../../public/imgs/Art2.jpg';
import Art3 from '../../public/imgs/Art3.jpg';
import Art4 from '../../public/imgs/Art4.jpg';
import Art5 from '../../public/imgs/Art5.jpg';
import Art6 from '../../public/imgs/Art6.jpg';
import Art7 from '../../public/imgs/Art7.jpg';
import Art8 from '../../public/imgs/Art8.jpg';
import img1 from '../../public/imgs/img1.jpg';
import img2 from '../../public/imgs/img2.jpg';
import img3 from '../../public/imgs/img3.jpg';
import img4 from '../../public/imgs/img4.jpg';

const images = [
  Art1,
  Art2,
  Art3,
  Art4,
  Art5,
  Art6,
  Art7,
  Art8,
  img1,
  img2,
  img3,
  img4,
];

const Gallery = () => {
  const [imageOrder, setImageOrder] = useState(images.map((image, index) => `image-${index}`));

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const newImageOrder = [...imageOrder];
    newImageOrder.splice(result.source.index, 1);
    newImageOrder.splice(result.destination.index, 0, result.draggableId);

    setImageOrder(newImageOrder);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="gallery">
          {(provided) => (
            <div className="general-container" {...provided.droppableProps} ref={provided.innerRef}>
              {imageOrder.map((imageId, index) => (
                <Draggable key={imageId} draggableId={imageId} index={index}>
                  {(provided) => (
                    <div
                      className="img-cont"
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <img src={images[index]} alt="" />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Gallery;
