import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import StartHere from './pages/StartHere';
import SegmentsOverview from './pages/SegmentsOverview';
import SegmentDetail from './pages/SegmentDetail';
import MessagingLibrary from './pages/MessagingLibrary';
import ContentEngine from './pages/ContentEngine';
import AIChat from './pages/AIChat';
import AIAgents from './pages/AIAgents';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/start-here" element={<StartHere />} />
          <Route path="/segments" element={<SegmentsOverview />} />
          <Route path="/segments/:segmentId" element={<SegmentDetail />} />
          <Route path="/messaging" element={<MessagingLibrary />} />
          <Route path="/content" element={<ContentEngine />} />
          <Route path="/chat" element={<AIChat />} />
          <Route path="/agents" element={<AIAgents />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
