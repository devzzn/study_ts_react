class List<T> {
    list: T[];
    constructor(list: T[]) {
        this.list = list;
    }

    getList(): T[] {
        return this.list
    }   
}

export default List;