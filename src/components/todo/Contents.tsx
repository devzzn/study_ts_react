import React from 'react';
import Todo from '../../models/Todo'; 
import TodoContent from './TodoContent';

const App: React.FC = () => {
    const [content, setContent] = React.useState('');
    const [todos, setTodos] = React.useState<Todo[]>([]);
    const $id = React.useRef(0);

    const onCreateHandler = () => {
        setTodos([...todos, new Todo({
          id: $id.current++,
          content,
          createdAt: new Date()
        })]);
        setContent('');
    }

    // 뷰에서는 양방향 바인딩 되지만, 리액튼는 안됨
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setContent(e.target.value);
    }


    const onDeleteHandler = (deleteId: number) => {
        setTodos(todos.filter(({id}) => {
            return id !== deleteId;
        }));
    }

    return (
        <section>
            <div>
                <input type="text" onChange={onChangeHandler} value={content}/>
                <button onClick={onCreateHandler}>입력</button>
            </div>
            <div>
                <ul>
                    {
                        todos.map( ({id, content, createdAt}) =>
                          <TodoContent key={`todo_content_${id}`} id={id} content={content} createdAt={createdAt} onDeleteHandler={onDeleteHandler}/>
                        )
                    }
                </ul>
            </div>
        </section>
    );
}

export default App;