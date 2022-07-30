import { Routes, Route } from 'react-router-dom';
import { Statistics } from './pages/Statistics';
import { Home } from './pages/Home';
import { TodoList } from './pages/To-do';
import { Settings } from './pages/Settings';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/to-do" element={<TodoList />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};
