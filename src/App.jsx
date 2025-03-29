import { Birthday } from './components/Birthday'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SecondPage from './components/SecondPage';
import { Email } from './components/Email';
import { OtpPage } from './components/OtpPage';

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Birthday />} />
      <Route path="/dashboard" element={<SecondPage />} />
      <Route path="/email" element={<Email />} />
      <Route path="/otp" element={<OtpPage number={5}/>} />
    </Routes>
  </Router>
  )
}

export default App
