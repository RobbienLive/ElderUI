import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ExampleComponent from './components/ExampleComponent';
import PageTools from './pages/PageTools';
import NotFound from './pages/NotFound';

function Home() {
  return (
    <main>
      <h1>Welcome to My React Vite App</h1>
      <ExampleComponent />
      <ExampleComponent />
      <ExampleComponent />
      <ExampleComponent />
      <ExampleComponent />
      <ExampleComponent />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page-tools" element={<PageTools />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;