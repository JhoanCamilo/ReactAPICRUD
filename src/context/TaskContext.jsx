import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    
    return(
        <TaskContext.Provider>
            {props.children}
        </TaskContext.Provider>
    )
}
