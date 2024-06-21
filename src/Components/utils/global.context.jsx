import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';


const initialState = {
  theme: 'light', 
  data: [], 
};


const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};


export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  
  const fetchDentists = async () => {
    try {
      const response = await axios.get('API_URL'); // Replace with your API endpoint
      dispatch({ type: 'SET_DATA', payload: response.data });
    } catch (error) {
      console.error('Error fetching dentists:', error);
    }
  };

  
  useEffect(() => {
    fetchDentists();
  }, []);


  const toggleTheme = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    dispatch({ type: 'SET_THEME', payload: newTheme });
  };

 
  const contextValue = React.useMemo(() => ({
    state,
    fetchDentists,
    toggleTheme,
  }), [state]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
