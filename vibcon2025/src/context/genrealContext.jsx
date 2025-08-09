import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
  const navigate = useNavigate();

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <GeneralContext.Provider value={{ navigate, showSidebar, setShowSidebar }}>
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => useContext(GeneralContext);
