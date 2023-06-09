import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Hero = React.lazy(() => import("pages/Hero"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          
          
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
