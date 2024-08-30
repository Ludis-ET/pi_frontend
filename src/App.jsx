import { BrowserRouter as Router } from "react-router-dom";

import { AuthenticationRoute } from "./routes/AuthenticationRoute";

function App() {
  return (
    <Router>
      <AuthenticationRoute />
    </Router>
  );
}

export default App;
