import ShowList from "./ShowList";

const TodoList = ({todos,deleteItem,onEdit}) => {
 const renderTodo = todos.map((todo)=>{
  return <ShowList onEdit={onEdit} key={todo.id} todo={todo} deleteItem={deleteItem}/>
 })
  return (<>{renderTodo}</>);
};
export default TodoList;
