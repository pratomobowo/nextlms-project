/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

import HomePage from './pages/HomePage';
import MyLearning from './pages/MyLearning';
import CourseDetail from './pages/CourseDetail';
import CategoryDetail from './pages/CategoryDetail';
import Checkout from './pages/Checkout';
import PaymentSuccess from './pages/PaymentSuccess';
import Cart from './pages/Cart';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminCourses from './pages/admin/AdminCourses';
import AdminUsers from './pages/admin/AdminUsers';
import AdminInstructors from './pages/admin/AdminInstructors';
import AdminCertificates from './pages/admin/AdminCertificates';
import AdminPlacements from './pages/admin/AdminPlacements';
import AdminTransactions from './pages/admin/AdminTransactions';
import AdminReviews from './pages/admin/AdminReviews';
import AdminRoles from './pages/admin/AdminRoles';
import AdminUserProfile from './pages/admin/AdminUserProfile';
import LearningPage from './pages/learning/LearningPage';
import StudentDashboard from './pages/StudentDashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Full-screen Learning Route */}
        <Route path="/learning/:courseId" element={<LearningPage />} />

        {/* Public / Student Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="my-learning" element={<MyLearning />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="categories" element={<CategoryDetail />} />
          <Route path="category/:id" element={<CategoryDetail />} />
          <Route path="course/:id" element={<CourseDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout/:id" element={<Checkout />} />
          <Route path="success" element={<PaymentSuccess />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="courses" element={<AdminCourses />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="users/:id" element={<AdminUserProfile />} />
          <Route path="roles" element={<AdminRoles />} />
          <Route path="instructors" element={<AdminInstructors />} />
          <Route path="certificates" element={<AdminCertificates />} />
          <Route path="placements" element={<AdminPlacements />} />
          <Route path="transactions" element={<AdminTransactions />} />
          <Route path="reviews" element={<AdminReviews />} />
        </Route>
      </Routes>
    </Router>
  );
}
