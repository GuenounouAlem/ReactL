import { createContext } from "react";
import Navbar from "./Navbar";
import Todos from "./Todos";

export const UserContext = createContext({
  name : 'guest',
  email : '',
  password : '',
  isLogged : false,
});

export default function Home() {
  return (
  <UserContext.Provider value={'guest'}>
    <div>
      <Navbar></Navbar>
      <Todos></Todos>
    </div>
    </UserContext.Provider>  
  )
}
