import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from "./Home";
import ChatRoom from "./ChatRoom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chat" component={ChatRoom} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
