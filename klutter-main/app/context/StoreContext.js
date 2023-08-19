"use client";
import { createContext, useContext, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const AppCtx = createContext();

const StoreContext = ({ children }) => {
  const [appState, setAppState] = useState({});
  return (
    <AppCtx.Provider value={(appState, setAppState)}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {children}
      </LocalizationProvider>
    </AppCtx.Provider>
  );
};

export default StoreContext;
