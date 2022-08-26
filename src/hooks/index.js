import { useContext } from "react";
import GlobalContext from "store/context";

export const useCalculatePoints = () => {
  const { todoList, criteriaList } = useContext(GlobalContext);

  // filter only "active" todos
  const activeTodos = todoList.filter((todo) => {
    return todo.status !== "done";
  });

  // calculate the points of each criteria
  const calculatedTodoList = activeTodos.map((todo) => {
    let total = 0;
    criteriaList.forEach((criteria) => {
      const score = todo.scores[criteria.id];
      const order = criteria.order;
      if (score) {
        total = score / order + total;
      } else {
        return (total = null);
      }
    });
    return {
      ...todo,
      points: total ? total.toFixed(2) : total,
    };
  });

  // order the list
  const orderedTodoList = calculatedTodoList.sort(
    (a, b) => b.points - a.points
  );

  return orderedTodoList;
};
