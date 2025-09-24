import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./AuthPage.jsx";
import "./index.css";
import PHQ9Page from "./phq-9";
import AssessmentResult from "./AssessmentResult.jsx";
import CounselorList from "./CounselorList.jsx";
import ResourceHub from "./ResourceHub.jsx";
import Dashboard from "./Dashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phq9" element={<PHQ9Page />} />
        <Route path="/result" element={<AssessmentResult />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/counselors" element={<CounselorList />} />
        <Route path="/resources" element={<ResourceHub />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
