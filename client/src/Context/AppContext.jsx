import { useContext, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const AppContext = React.createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider =({children})=>{
  const [userLogin , setIsUserLogin] = useState(true);
  const navigate = useNavigate();
  
  const value={userLogin , setIsUserLogin , navigate};
  
  return(
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  )
}