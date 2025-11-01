import dynamic from 'next/dynamic';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';

// Lazy load components below the fold for better performance
const About = dynamic(() => import('../components/About'), {
  loading: () => <div className="min-h-screen" />,
});

const Timeline = dynamic(() => import('../components/Timeline'), {
  loading: () => <div className="min-h-[400px]" />,
});

const ProjectsSection = dynamic(() => import('../components/projects/ProjectsSection'), {
  loading: () => <div className="min-h-[600px]" />,
});

const MachineCodingSection = dynamic(() => import('../components/machineCode/MachineCodingSection'), {
  loading: () => <div className="min-h-[600px]" />,
});

const NotesSection = dynamic(() => import('../components/notes/NotesSection'), {
  loading: () => <div className="min-h-[600px]" />,
});

const Education = dynamic(() => import('../components/Education'), {
  loading: () => <div className="min-h-[400px]" />,
});

const Contact = dynamic(() => import('../components/Contact'), {
  loading: () => <div className="min-h-[600px]" />,
});

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <ProjectsSection />
      {/* Hidden but kept in code */}
      <div className="hidden">
        <MachineCodingSection />
        <NotesSection />
      </div>
      <Education />
      <Contact />
    </div>
  );
}

