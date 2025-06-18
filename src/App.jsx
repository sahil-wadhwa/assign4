import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/sidebar';
import { Header } from './components/header';
import Dashboard from './components/Dashboard';
import KanbanPage from './components/kanban_page';
import CalendarPage from './components/calendar_page';
import ThemeContext from './components/theme_context';

function App() {
  return (
    <ThemeContext.Provider>
      <Router>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 p-4 overflow-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/kanban" element={<KanbanPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
