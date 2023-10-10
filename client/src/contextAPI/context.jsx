import { createContext, useContext, useState } from 'react';
import axios from 'axios';
const UserContext = createContext();

// -------------------------------------------context-provider--------------------------------------
export const ContextProvider = ({ children }) => {
  // ---------------------------------------fetchData------------------------------------
  const getData = async () => {
    try {
      const fetchData = await axios.get(
        `https://touristserver-6vof.onrender.com/trips?keywords=${input.trim()}`
      );
      setData(fetchData.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // ------------------------------Data--------------------------------------------------
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);

  return (
    <UserContext.Provider value={{ input, setInput, data, setData, getData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(UserContext);
};
