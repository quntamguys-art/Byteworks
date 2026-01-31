import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FacultyPage } from './pages/FacultyPage';
import { AdmissionPage } from './pages/AdmissionPage';
import { LoginPage } from './pages/LoginPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { TeacherDashboard } from './pages/TeacherDashboard';
import { StudentDashboard } from './pages/StudentDashboard';
import { ClubPage } from './pages/ClubPage';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage },
      { path: 'faculty', Component: FacultyPage },
      { path: 'admission', Component: AdmissionPage },
      { path: 'clubs', Component: ClubPage },
      { path: 'login', Component: LoginPage },
      { path: '*', Component: NotFound },
    ],
  },
  {
    path: '/dashboard',
    children: [
      { path: 'admin', Component: AdminDashboard },
      { path: 'teacher', Component: TeacherDashboard },
      { path: 'student', Component: StudentDashboard },
    ],
  },
]);