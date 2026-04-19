import { Routes, Route } from "react-router-dom";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { PageLayout } from "@/components/PageLayout";

import HomePage          from "@/pages/HomePage";
import AboutPage         from "@/pages/AboutPage";
import SkillsPage        from "@/pages/SkillsPage";
import ProjectsPage      from "@/pages/ProjectsPage";
import ResearchPage      from "@/pages/ResearchPage";
import EducationPage     from "@/pages/EducationPage";
import ExperiencePage    from "@/pages/ExperiencePage";
import LeadershipPage    from "@/pages/LeadershipPage";
import CertificationsPage from "@/pages/CertificationsPage";
import ArtPage           from "@/pages/ArtPage";
import GalleryPage       from "@/pages/GalleryPage";
import ContactPage       from "@/pages/ContactPage";

export default function App() {
  useSmoothScroll();

  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/"               element={<HomePage />} />
        <Route path="/about"          element={<AboutPage />} />
        <Route path="/skills"         element={<SkillsPage />} />
        <Route path="/projects"       element={<ProjectsPage />} />
        <Route path="/research"       element={<ResearchPage />} />
        <Route path="/education"      element={<EducationPage />} />
        <Route path="/experience"     element={<ExperiencePage />} />
        <Route path="/leadership"     element={<LeadershipPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/art"            element={<ArtPage />} />
        <Route path="/gallery"        element={<GalleryPage />} />
        <Route path="/contact"        element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
