import React from "react";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  margin: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${(props) => (props.isDraggingOver ? "#d9d9d9" : "white")};
`;
const Title = styled.h3`
  padding: 12px;
  margin: 0;
`;
const TaskList = styled.div`
  padding: 12px;
`;

const Column = ({ column, tasks, ...props }) => {
    // debugger
    return (
        <Container id={column.id}>
            <Title>{column.title}</Title>
            <Droppable droppableId={column.id}>
                {(provided, snapshot) => {

                    return (
                        <TaskList ref={provided.innerRef} {...provided.droppableProps}>
                            {tasks.map((t, i) => {
                                return (
                                    <Task key={t.id} task={t} index={i}/>
                                )
                            })}
                            {provided.placeholder}
                        </TaskList>
                    )
                }}
            </Droppable>
            <button onClick={props.handleSubmit}>submit</button>
        </Container>
    );
};

export default Column;
