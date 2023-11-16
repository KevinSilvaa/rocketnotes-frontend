import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { NewNote } from "../pages/NewNote";
import { Profile } from "../pages/Profile";
import { Details } from "../pages/Details";

export function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/NewNote" element={<NewNote />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Details/:id" element={<Details />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
