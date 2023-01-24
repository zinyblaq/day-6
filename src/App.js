import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './header';
// import Footer from './footer';
import LandingPage from './Landing-page';
import CompanyPage from './pages/companypage';
import HowItWorks from './pages/how-it-works';

function App() {
  return (
    <Router>
      {/* <div> */}
      {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/companypage" element={<CompanyPage />} />
        <Route exact path="/how-it-works" element={<HowItWorks />} />
      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
