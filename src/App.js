import Router from "./routes/router";
import { Notifications } from "./components";

function App() {
  return (
    <div className="App">
      <Router />
      <Notifications />
    </div>
  );
}

export default App;
