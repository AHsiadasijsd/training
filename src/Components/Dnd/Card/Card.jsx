import { memo } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemTypes = {
    CARD: 'card',
}
const style = {
    border: '1px solid gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'pointer',
};
export const Card = memo(function Card({ id, title, moveCard, findCard, }) {
    const originalIndex = findCard(id).index;

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.CARD,
        item: { id, originalIndex },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        end: (item, monitor) => {
            const { id: droppedId, originalIndex } = item;
            const didDrop = monitor.didDrop();
            if (!didDrop) {
                moveCard(droppedId, originalIndex);
            }
        },
    }), [id, originalIndex, moveCard]);

    const [, drop] = useDrop(() => ({
        accept: ItemTypes.CARD,
        canDrop: () => false,
        hover({ id: draggedId }) {
            if (draggedId !== id) {
                const { index: overIndex } = findCard(id);
                moveCard(draggedId, overIndex);
            }
        },
    }), [findCard, moveCard]);

    // const opacity = isDragging ? 0.7 : 1;
    const borderColor = isDragging ? 'blue' : 'black';
    const color = isDragging ? 'blue' : 'black';
    return (
        <div ref={(node) => drag(drop(node))} style={{ ...style, borderColor, color }}>
            {title}
        </div>
    );
});
