import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context";
import { MainRoute } from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Toaster />
        <MainRoute />
      </AuthProvider>
    </Router>
  );
}

export default App;
