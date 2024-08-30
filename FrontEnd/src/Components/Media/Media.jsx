import React from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Card = ({ id, videoLink, index, moveCard }) => {
    const [, drag] = useDrag({
        type: 'CARD',
        item: { id, index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, drop] = useDrop({
        accept: 'CARD',
        hover: (item, monitor) => {
            if (!dragRef.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            moveCard(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const dragRef = React.useRef(null);
    drag(drop(dragRef));

    return (
        <div ref={dragRef} style={{ border: '1px solid #52b9f0', padding: '10px', marginBottom: '5px', margin:"20px", borderRadius:"10px" }}>
            <iframe
                title={`Video ${id}`}
                width="100%"
                height="200px"
                src={videoLink}
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

const Media = () => {
    const [cards, setCards] = React.useState([
        { id: 1, videoLink: 'https://www.youtube.com/embed/NMyxsS0-krs?si=Bd0b7styUcmZP363' },
        { id: 2, videoLink: 'https://www.youtube.com/embed/43YoEEjDkuw?si=sSvG9lnD00j8CyCX' },
        { id: 3, videoLink: 'https://www.youtube.com/embed/7MVFDKzVdaE?si=-TOcHxf3-Rnno8vk' },
        { id: 4, videoLink: 'https://www.youtube.com/embed/Nb29bMt7mao?si=JTKaw04CtCSl5PiV' },
        { id: 5, videoLink: 'https://www.youtube.com/embed/_-Py_OVnzA8?si=jsHKI9rs9UHHGgth' },
        { id: 6, videoLink: 'https://www.youtube.com/embed/zp0uRR-DDKM?si=df49S1PirsgFVvQn' },
    ]);

    const moveCard = (dragIndex, hoverIndex) => {
        const draggedCard = cards[dragIndex];
        setCards((prevState) => {
            const updatedCards = [...prevState];
            updatedCards.splice(dragIndex, 1);
            updatedCards.splice(hoverIndex, 0, draggedCard);
            return updatedCards;
        });
    };

    return (
        <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"20px"}}>
            <h1 style={{width:"70%" ,fontSize:"16px", display:"flex", justifyContent:"flex-start"}}>Məhsullarımızın Tanıtım Videoları</h1>
            <DndProvider backend={HTML5Backend}>
            <div style={{ width: "80%", display: 'flex', flexWrap: "wrap", justifyContent:"center", gap:"10px" }}>
                {cards.map((card, index) => (
                    <Card 
                    key={card.id} 
                    id={card.id} 
                    videoLink={card.videoLink} 
                    index={index} 
                    moveCard={moveCard}
                    />
                ))}
            </div>
        </DndProvider>
        </div>
        
    );
};

export default Media;