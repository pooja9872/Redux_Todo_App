import React, { useState } from "react";
import styles from "./todo.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import { MdDelete } from "react-icons/all";

function Todo() {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        className={styles.text}
        type="text"
        placeholder="Enter your task...."
        value={inputData}
        onChange={(event) => setInputData(event.target.value)}
      />
      <button
        className={styles.btn}
        onClick={() => dispatch(addTodo(inputData), setInputData(""))}
      >
        +
      </button>

      <div>
        {list.map((elem) => {
          return (
            <div className={styles.list} key={elem.id}>
              <h3 className={styles.item1}>{elem.data}</h3>
              <button
                className={styles.btn1}
                onClick={() => dispatch(deleteTodo(elem.id))}
              >
                <MdDelete className={styles.deleteIcon} />
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <button
          className={styles.removeBtn}
          onClick={() => dispatch(removeTodo())}
        >
          Remove All
        </button>
      </div>
    </div>
  );
}

export default Todo;
