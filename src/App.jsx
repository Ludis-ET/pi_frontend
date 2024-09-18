import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context";
import { MainRoute } from "./routes";

function App() {
  return (
    <Router>
      <AuthProvider>
        <MainRoute />
      </AuthProvider>
    </Router>
  );
}

export default App;
