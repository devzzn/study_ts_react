import React from 'react';
import Todo from '../../models/Todo'; 

interface TodoContentProps extends Todo {
    onDeleteHandler: (id: number) => void;
}

const TodoContent: React.FC<TodoContentProps> = (props) => {
    const { id, content, createdAt, onDeleteHandler } =  props;

    const dateParser = (date: Date) => {
        return `${date.getFullYear()} ${date.getMonth() + 1}`;
    }

    return (
        <li key={`todo_${id}`}>{content} {dateParser(createdAt)}<button onClick={() => {onDeleteHandler(id)}}>삭제</button></li>
    )
}

export default TodoContent;