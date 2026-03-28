import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

/* Student */
import StudentDashboard from "./student/StudentDashboard";
import ViewModules from "./student/ViewModules";
import TrackProgress from "./student/TrackProgress";
import UpdateProgress from "./student/UpdateProgress";
import TakeTest from "./student/TakeTest";

/* Admin */
import AdminDashboard from "./admin/AdminDashboard";
import AddModule from "./admin/AddModule";
import ViewAdminModules from "./admin/ViewModules";
import DeleteModule from "./admin/DeleteModule";

/* Manager */
import ManagerDashboard from "./manager/ManagerDashboard";
import ViewReports from "./manager/ViewReports";
import Analytics from "./manager/Analytics";
import AddTest from "./manager/AddTest";
import ManageStudents from "./manager/ManageStudents";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Student Routes */}
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/modules" element={<ViewModules />} />
        <Route path="/student/progress" element={<TrackProgress />} />
        <Route path="/student/update" element={<UpdateProgress />} />
        <Route path="/student/test" element={<TakeTest />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add" element={<AddModule />} />
        <Route path="/admin/view" element={<ViewAdminModules />} />
        <Route path="/admin/delete" element={<DeleteModule />} />

        {/* Manager Routes */}
        <Route path="/manager" element={<ManagerDashboard />} />
        <Route path="/manager/reports" element={<ViewReports />} />
        <Route path="/manager/analytics" element={<Analytics />} />
        <Route path="/manager/add-test" element={<AddTest />} />
<Route path="/manager/students" element={<ManageStudents />} />
<Route path="/manager/test" element={<TakeTest />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;