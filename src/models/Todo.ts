class Todo {
    id: number;
    content: string;
    createdAt: Date;

    constructor({id, content, createdAt}: Todo) {
        this.id = id;
        this.content = content;
        this.createdAt = createdAt;
    }
}

export default Todo;