import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, StudentProvider } from "./context";
import { MainRoute } from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <AuthProvider>
        <StudentProvider>
          <Toaster />
          <MainRoute />
        </StudentProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
