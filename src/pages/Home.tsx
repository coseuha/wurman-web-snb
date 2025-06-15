import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { homeContent } from '@/data/home';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Card = ({ Icon, title, description, link }: { Icon: React.ElementType, title: string, description: string, link: string }) => (
  <Link to={link} className="block bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1">
    <Icon className="w-10 h-10 text-accent-orange mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </Link>
);

const Home = () => {
  useDocumentMeta('Richard Saul Wurman | Accueil', 'Le site officiel de Richard Saul Wurman, pionnier de l'architecture de l'information et fondateur de TED.');
  const [imageError, setImageError] = useState(false);

  const { hero, featureCards, quote } = homeContent;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        {!imageError ? (
          <img 
            src="/wurman-web-snb/lovable-uploads/bb4cb26e-35b9-4e47-9a07-d52b95b840b7.png" 
            alt="Hero background" 
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        )}
        <div className="relative z-20 text-center p-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">{hero.title}</h1>
          <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto">{hero.subtitle}</p>
          <Link
            to={hero.ctaLink}
            className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-accent-orange text-white font-bold rounded-md text-lg hover:bg-amber-500 transition-colors"
          >
            {hero.cta}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {featureCards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-white py-20">
        <div className="container text-center max-w-4xl mx-auto">
          <blockquote className="text-3xl font-serif italic text-text-color">
            "{quote.text}"
          </blockquote>
          <p className="mt-6 text-xl font-bold text-gray-700">— {quote.author}</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
