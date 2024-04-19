import React, { createContext, useContext, useState } from "react";

// Create the context with default value as empty state
const UserContext = createContext<
  [IState, React.Dispatch<React.SetStateAction<IState>>]
>([{} as IState, () => {}]);

export const useUser = () => useContext(UserContext);

// Context provider component
const UserContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  // Initialize state with default values
  const [state, setState] = useState<IState>({
    user: {
      name: "",
      email: "",
      image: "",
    },
  });

  // Return the context provider with state and setState
  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
