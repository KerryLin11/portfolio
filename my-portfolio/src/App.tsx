// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutSection from './pages/About';
import ProjectsSection from './pages/Projects';
import ContactSection from './pages/Contact';
import DraggableCanvas from './components/mindmap buttons/DraggableCanvas';
import DebugPage from './pages/DebugPage';

function App() {
  return (
    <Router basename="/portfolio">
      <Routes>
        <Route path="/" element={
          <DraggableCanvas>
            <Home />
          </DraggableCanvas>
        } />

        {/* Placeholder routes */}
        <Route path="/about" element={
          <AboutSection onClose={() => { }} />
        } />
        <Route path="/projects" element={
          <ProjectsSection onClose={() => { }} />
        } />
        <Route path="/contact" element={
          <ContactSection onClose={() => { }} />
        } />

        <Route path="/debug" element={
          <DebugPage />
        } />
      </Routes>
    </Router>
  );
}

export default App;