'use client';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import Navbar from '@/layouts/navbar/Navbar';
import Footer from '@/layouts/footer/Footer';
import ChatWidget from '@/components/ai-agent/ChatWidget';

function AppShellInner({ children }) {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className={`min-h-screen ${darkMode ? 'bg-[#030712] text-white' : 'bg-white text-slate-900'}`}>
        <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
        <main className="pt-16">
          {children}
        </main>
        <ChatWidget darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}

export default function AppShell({ children }) {
  return (
    <ThemeProvider>
      <AppShellInner>{children}</AppShellInner>
    </ThemeProvider>
  );
}
