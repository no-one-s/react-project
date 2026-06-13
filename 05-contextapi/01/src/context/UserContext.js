import {react, createContext} from 'react';

export const UserContext = createContext();
//it does: 1. create a context object that can be used to share data across components without passing props down manually at every level.
//2. It provides a way to manage and access global state in a React application, making it easier to share data and functionality across components without the need for prop drilling.

{/* <UserContext.Provider value={{name: 'John', age: 30}}> // The value prop is used to provide the data that will be accessible to all components that are contained within this context. In this case, we are providing an object with name and age properties. */}
{/*  <YourComponent />
     <YourComponent />
     <YourComponent />
    </UserContext.Provider> */}