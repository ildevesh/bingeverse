import { useState } from 'react';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import Liked from './pages/Liked';
import Profile from './pages/Profile';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderTab = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'watchlist':
        return <Watchlist />;
      case 'liked':
        return <Liked />;
      case 'profile':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="pb-20 min-h-screen bg-gray-50">
      {renderTab()}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
