import {
  AboutSection,
  ContactSection,
  Footer,
  HeroSection,
  Navbar,
  ProjectSection,
  SkillsSection,
  StarBackground,
  ThemeToggle,
} from "../components";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
   
      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <SkillsSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
