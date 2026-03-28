import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

import StudentDashboard from "./student/StudentDashboard";
import ViewModules from "./student/ViewModules";
import TrackProgress from "./student/TrackProgress";
import UpdateProgress from "./student/UpdateProgress";
import TakeTest from "./student/TakeTest";


import AdminDashboard from "./admin/AdminDashboard";
import AddModule from "./admin/AddModule";
import ViewAdminModules from "./admin/ViewModules";
import DeleteModule from "./admin/DeleteModule";


import ManagerDashboard from "./manager/ManagerDashboard";
import ViewReports from "./manager/ViewReports";
import Analytics from "./manager/Analytics";
import AddTest from "./manager/AddTest";
import ManageStudents from "./manager/ManageStudents";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>

        
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/modules" element={<ViewModules />} />
        <Route path="/student/progress" element={<TrackProgress />} />
        <Route path="/student/update" element={<UpdateProgress />} />
        <Route path="/student/test" element={<TakeTest />} />

       
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add" element={<AddModule />} />
        <Route path="/admin/view" element={<ViewAdminModules />} />
        <Route path="/admin/delete" element={<DeleteModule />} />

       
        <Route path="/manager" element={<ManagerDashboard />} />
        <Route path="/manager/reports" element={<ViewReports />} />
        <Route path="/manager/analytics" element={<Analytics />} />
        <Route path="/manager/add-test" element={<AddTest />} />
<Route path="/manager/students" element={<ManageStudents />} />
<Route path="/manager/test" element={<TakeTest />} />

        
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;