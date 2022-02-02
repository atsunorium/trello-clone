import React from 'react';
import { v4 as uuid } from 'uuid';

export const TaskAddInput = ({
  inputText, 
  setInputText, 
  setTaskList, 
  taskList,
}) => {
  const handleSubmit = (e) => {
    // uuidの生成
    const taskId = uuid();
    e.preventDefault();//リロードの無効化。
    if(inputText === ""){
      return;
    }
    // カードを追加する。
    setTaskList([...taskList, 
      {
        id: taskId,
        draggable: `task-${taskId}`,
        text: inputText,
      },
  ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  return (
  <div>
    <form onSubmit={handleSubmit}>
      <input type="text" 
      placeholder="add a task" 
      className="taskAddInput" 
      onChange={handleChange}
      value={inputText}
      />
    </form>
  </div>
  );
};
