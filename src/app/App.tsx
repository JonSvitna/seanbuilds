import { BrowserRouter, Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { HeroText } from "./components/HeroText";
import { ProductCollage } from "./components/ProductCollage";
import { FeatureStrip } from "./components/FeatureStrip";
import { WhatIBuildPage } from "./pages/WhatIBuildPage";
import { GitHubProjectsPage } from "./pages/GitHubProjectsPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { WorkPage } from "./pages/WorkPage";

function HeroPage() {
  return (
    <>
      <div className="flex flex-1 items-center px-10 gap-8 mt-4">
        <div className="w-[45%] shrink-0">
          <HeroText />
        </div>
        <div className="w-[55%] shrink-0 overflow-visible">
          <ProductCollage />
        </div>
      </div>
      <FeatureStrip />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full flex flex-col" style={{ backgroundColor: "#03060D" }}>
        <Header />
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/what-i-build" element={<WhatIBuildPage />} />
          <Route path="/github-projects" element={<GitHubProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
