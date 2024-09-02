import { BrowserRouter as Router } from "react-router-dom";

import { MainRoute } from "./routes";

function App() {
  return (
    <Router>
      <MainRoute />
    </Router>
  );
}

export default App;
