import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import LandingPage from './pages/LandingPage'
import PasswordResetPage from './pages/PasswordResetPage'
import VerifyPage from './pages/VerifyPage'
import PasswordResetPage2 from './pages/PasswordResetPage2'
import VerifyFailedPage from './pages/VerifyFailedPage'
import VerifySuccessfulPage from './pages/VerifySuccessfulPage'
import DashboardPage from './pages/DashboardPage';

import PrivateRoute from "./routes/PrivateRoute";
import Track from './components/spotify/spotify.track';

const code = new URLSearchParams(window.location.search).get("code")
function App() {
  return (
  <BrowserRouter>
    <Routes>

      <Route path="/" element={code ? <DashboardPage code={code} /> : <LandingPage/>} />
      <Route path="/profile" element={code ? <DashboardPage code={code} /> : <LandingPage/>} />
      <Route path="/topartist" element={code ? <DashboardPage code={code} /> : <LandingPage/>} />
      <Route path="/toptracks" element={code ? <DashboardPage code={code} /> : <LandingPage/>} />
      <Route path="/player" element={code ? <DashboardPage code={code} /> : <LandingPage/>} />
      <Route path="/playlist" element={code ? <DashboardPage code={code} /> : <LandingPage/>} />
      <Route path="/track/:trackId/:musicName/:albumName/:artist" element={<Track/>}/>

    </Routes>
  </BrowserRouter>
);
}

export default App
