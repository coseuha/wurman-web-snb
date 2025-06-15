import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { aboutContent } from '@/data/about';
import { Check } from 'lucide-react';

const TimelineItem = ({ year, event }: { year: string, event: string }) => (
  <div className="relative pl-8 sm:pl-12 py-4 group">
    <div className="flex items-center mb-1 sm:mb-0">
      <div className="z-10 bg-accent-blue h-6 w-6 rounded-full flex items-center justify-center text-white">
        <Check className="w-4 h-4" />
      </div>
      <div className="flex-1 ml-4">
        <h4 className="font-bold text-lg">{year}</h4>
      </div>
    </div>
    <div className="ml-4 mt-2">
      <p className="text-gray-600">{event}</p>
    </div>
    <div className="absolute top-0 left-3 sm:left-5 h-full w-px bg-gray-300 group-last:h-8"></div>
  </div>
);

const About = () => {
  useDocumentMeta(aboutContent.title, aboutContent.description);

  return (
    <div className="container py-16">
      <div className="grid lg:grid-cols-4 gap-12">
        <aside className="lg:col-span-1 lg:sticky lg:top-24 self-start">
          <nav className="bg-gray-100 p-6 rounded-lg">
            <ul>
              {aboutContent.sidebarNav.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="block py-2 text-gray-700 hover:text-accent-blue font-semibold transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="lg:col-span-3 space-y-16">
          <section id="biographie">
            <h2 className="text-4xl font-bold mb-6">{aboutContent.biographie.title}</h2>
            <div className="prose max-w-none text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {aboutContent.biographie.content}
            </div>
          </section>

          <section id="parcours">
            <h2 className="text-4xl font-bold mb-8">{aboutContent.parcours.title}</h2>
            <div className="relative">
              {aboutContent.parcours.timeline.map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
            </div>
          </section>

          <section id="architecture">
            <h2 className="text-4xl font-bold mb-6">{aboutContent.architecture.title}</h2>
            <p className="text-lg text-gray-700 mb-6">{aboutContent.architecture.content}</p>
            <img src={aboutContent.architecture.imageUrl} alt="Infographie sur l'architecture de l'information" className="w-full h-auto rounded-lg shadow-md" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
