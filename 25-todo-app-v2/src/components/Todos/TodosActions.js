import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";

function TodosActions({resetTodos, deleteCompletedTodos, ClassName}) {
  return (
    <div className={ClassName}>
      <Button title="Rest Todos" onClick={resetTodos}>
        <RiDeleteBin2Line />
      </Button>
      <Button title="Clear Completed Todos" onClick={deleteCompletedTodos}>
        <RiRefreshLine />
      </Button>
    </div>
  );
}

export default TodosActions;
