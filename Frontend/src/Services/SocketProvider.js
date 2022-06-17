import { useContext, useEffect, useState,createContext } from 'react'
import io from 'socket.io-client';
import { BASE_URL } from '../config/config';
import RouteLoader from '../Componenet/route loader/route.loader'

const SocketContext = createContext();

export function useSocket() {
  return useContext(SocketContext)
}

export function SocketProvider({children}) {
  const [socket, setSocket] = useState()
 const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const socket = io(BASE_URL);

    socket.on("connect", () => {
      console.log(socket.id); 
      setShowLoader(false);
    });

    socket.on("connect_error", () => {
      setShowLoader(true);
      setTimeout(() => {
        socket.connect();
      }, 1000);
    });

    setSocket(socket)
    return () => socket.close()
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {
        showLoader?
        <RouteLoader loaderMsg={"Reconnecting..."} loaderVal={true}/> : <span></span>
      }
      
      {children}
    </SocketContext.Provider>
  )
}
