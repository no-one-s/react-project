import { TodoContext } from './TodoContext';

const TodoContextProvider = ({ children, value }) => (
  <TodoContext.Provider value={value}>
    {children}
  </TodoContext.Provider>
);

export default TodoContextProvider
