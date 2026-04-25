import Hero from '../components/Hero';
import StatsBand from '../components/StatsBand';
import CompanyOverview from '../components/CompanyOverview';
import Services from '../components/Services';
import Infrastructure from '../components/Infrastructure';
import QualityAssurance from '../components/QualityAssurance';
import AchievementsSection from '../components/AchievementsSection';
import ContactDetails from '../components/ContactDetails';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen overflow-x-hidden">
      <Hero />
      <StatsBand />
      <CompanyOverview />
      <Services /> 
      <Infrastructure />
      <QualityAssurance />
      <AchievementsSection />
      <ContactDetails />
      <Footer />
    </div>
  );
}
