import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const { todos, selectedTab } = props


    const filterTodosList = selectedTab === 'All' ?
        todos :
        selectedTab === 'Completed' ?
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete)

    return (
        <>
            {filterTodosList.map((todo, todoIndex) => {
                const tempTodoIndex = todos.findIndex(val => val.input == todo.input)
                console.log(tempTodoIndex)
                // finding an index like this has it's limitations and in later courses we learn a more sophisticated way of doing it (the limitation is that the code might misbehave if you have two todos with the exact same text :) See if you can figure out why!)
                return (
                    <TodoCard
                        key={todoIndex}
                        {...props}
                        todoIndex={tempTodoIndex}
                        todo={todo} />
                )
            })}

        </>
    )
}