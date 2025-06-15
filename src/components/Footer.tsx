import { Twitter, Linkedin } from 'lucide-react';

const icons: { [key: string]: React.ElementType } = {
  Twitter,
  Linkedin,
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-2">Suivez-nous</h3>
            <div className="flex space-x-4">
              {footerInfo.socials.map((social) => {
                const Icon = icons[social.icon];
                return (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent-blue">
                    <Icon className="w-6 h-6" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-2">Informations</h3>
            <p className="text-sm text-gray-600">Ce site est dédié à l'œuvre et à l'héritage de Richard Saul Wurman, pionnier de l'architecture de l'information.</p>
            <p className="text-sm text-gray-600 mt-2">Pour toute question ou collaboration, n'hésitez pas à nous contacter via le formulaire.</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Seuha Nour Barfia et El m'ghari Ghitha. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
