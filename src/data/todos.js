import { v4 as uuidv4 } from "uuid";

const todosList = [
  {
    id: uuidv4(),
    title: "Go to market",
    isCompleted: true,
  },
  {
    id: uuidv4(),
    title: "Cook rice",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Do exercise",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Do homework",
    isCompleted: false,
  },
];

export { todosList };
