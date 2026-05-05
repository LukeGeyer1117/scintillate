import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App
