import Router from "./routes/router";
import { ErrorFallback, Notifications } from "./components";
import { withErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <div className="App">
      <Router />
      <Notifications />
    </div>
  );
}

export default withErrorBoundary(App, {
  FallbackComponent: ErrorFallback,
});
