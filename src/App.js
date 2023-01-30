import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './header';
// import Footer from './footer';
import LandingPage from './Landing-page';
import CompanyPage from './pages/companypage';
import HowItWorks from './pages/how-it-works';
import Blog from './pages/blogs';
import Partnership from './pages/partnership';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/companypage" element={<CompanyPage />} />
        <Route exact path="/how-it-works" element={<HowItWorks />} />
        <Route exact path="/blogs" element={<Blog />} />
        <Route exact path="/partnership" element={<Partnership />} />
      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
