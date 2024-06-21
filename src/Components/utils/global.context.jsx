import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

// Initial state
const initialState = {
  theme: 'light', // Default theme
  data: [], // Array to hold fetched dentist data
};

// Reducer function to handle state updates
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

// Context creation
export const GlobalContext = createContext();

// Context provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch dentists from API
  const fetchDentists = async () => {
    try {
      const response = await axios.get('API_URL'); // Replace with your API endpoint
      dispatch({ type: 'SET_DATA', payload: response.data });
    } catch (error) {
      console.error('Error fetching dentists:', error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchDentists();
  }, []);

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    dispatch({ type: 'SET_THEME', payload: newTheme });
  };

  // Memoized context value to optimize performance
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
