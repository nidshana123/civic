@@ .. @@
 import './i18n';
 import React from 'react';
+import { ThemeProvider } from '@mui/material/styles';
+import { CssBaseline } from '@mui/material';
+import theme from './theme/theme';
 import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
 import SuperAdminDashboard from './components/SuperAdminDashboard';
 import DepartmentDashboard from './components/DepartmentDashboard';
@@ .. @@
 
 function App() {
   return (
-    <Router>
-      <Routes>
-        {/* ✅ Default route goes to UnifiedLogin */}
-        <Route path="/" element={<Navigate to="/login" />} />
+    <ThemeProvider theme={theme}>
+      <CssBaseline />
+      <Router>
+        <Routes>
+          {/* ✅ Default route goes to UnifiedLogin */}
+          <Route path="/" element={<Navigate to="/login" />} />
 
-        {/* ✅ Single login page */}
-        <Route path="/login" element={<UnifiedLogin />} />
+          {/* ✅ Single login page */}
+          <Route path="/login" element={<UnifiedLogin />} />
 
-        {/* ✅ Dashboards by role */}
-        <Route path="/dashboard" element={<SuperAdminDashboard />} />
-        <Route path="/dept-dashboard" element={<DepartmentDashboard />} />
-         <Route path="/dept-dashboard/:deptId" element={<DepartmentDashboard />} />
-        <Route path="/staff-dashboard" element={<StaffDashboard />} />
-        <Route path="/publicwork" element={<PublicWorkDepartment />} />
+          {/* ✅ Dashboards by role */}
+          <Route path="/dashboard" element={<SuperAdminDashboard />} />
+          <Route path="/dept-dashboard" element={<DepartmentDashboard />} />
+           <Route path="/dept-dashboard/:deptId" element={<DepartmentDashboard />} />
+          <Route path="/staff-dashboard" element={<StaffDashboard />} />
+          <Route path="/publicwork" element={<PublicWorkDepartment />} />
 
-      </Routes>
-    </Router>
+        </Routes>
+      </Router>
+    </ThemeProvider>
   );
 }