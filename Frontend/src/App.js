import Home from "./Home/Home"
import {Switch, Route} from 'react-router-dom';
import MultiPlayer from "./MultiPlayer/MultiPlayer";
import SinglePlayer from './SinglePlayer/SinglePlayer';
// eslint-disable-next-line
import Background from "./Componenet/background/background";
import NoMobile from "./Componenet/not available mobile/no.mobile";
// import RouteLoader from './Componenet/route loader/route.loader'
// import {useEffect} from 'react';


function App() {

  

  return (
      <div style={{backgroundColor:"#8a2be2", overflow:"hidden" ,overflowY: "hidden"  }}>
         <NoMobile/>
         {/* <RouteLoader/> */}
        <Background />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/SinglePlayer" component={SinglePlayer}/>
          <Route path="/Multiplay" component={MultiPlayer}/>
        </Switch>
      </div>
    
  );
}



export default App;
