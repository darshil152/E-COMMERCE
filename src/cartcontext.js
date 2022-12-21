import React from "react";


const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

const data= JSON.parse(localStorage.getItem('sneakersdata'))

export {UserProvider,UserConsumer,data,UserContext}