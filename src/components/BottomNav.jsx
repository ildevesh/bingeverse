// src/components/BottomNav.jsx
import { Home, Bookmark, Heart, User } from 'lucide-react';

export default function BottomNav({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'home', icon: <Home />, label: 'Home' },
    { id: 'watchlist', icon: <Bookmark />, label: 'Watchlist' },
    { id: 'liked', icon: <Heart />, label: 'Liked' },
    { id: 'profile', icon: <User />, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around items-center h-16">
      {navItems.map(item => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`flex flex-col items-center text-xs ${
            activeTab === item.id ? 'text-purple-600' : 'text-gray-500'
          }`}
        >
          {item.icon}
          <span className="text-[10px]">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
