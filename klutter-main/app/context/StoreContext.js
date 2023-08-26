"use client";
import { createContext, useContext, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const AppCtx = createContext();

const StoreContext = ({ children }) => {
  const [appState, setAppState] = useState({ showHero: true });
  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    <AppCtx.Provider value={{ store: appState, setStore: setAppState }}>
      {children}
    </AppCtx.Provider>
    // </LocalizationProvider>
  );
};

export default StoreContext;
