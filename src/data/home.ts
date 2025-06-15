import { BookOpen, Presentation, ImageIcon } from 'lucide-react';

export const homeContent = {
  hero: {
    title: 'L'Architecte de l'Information',
    subtitle: 'Pionnier de l'organisation de la connaissance et fondateur de TED.',
    cta: 'Découvrir son Œuvre',
    ctaLink: '/oeuvres',
    imageUrl: '/images/home.jpg'
  },
  featureCards: [
    {
      Icon: BookOpen,
      title: 'Livres et Publications',
      description: 'Explorez une vaste collection d'ouvrages qui ont innové le domaine de l'architecture de l'information.',
      link: '/oeuvres'
    },
    {
      Icon: Presentation,
      title: 'Conférences et Entretiens',
      description: 'Revivez les moments clés de ses interventions, y compris la fondation des conférences TED.',
      link: '/oeuvres'
    },
    {
      Icon: ImageIcon,
      title: 'Concepts Clés',
      description: 'Plongez dans les idées fondamentales qui ont révolutionné la manière dont nous comprenons l'information.',
      link: '/architecture-information'
    }
  ],
  quote: {
    text: 'L'information n'est pas ce que vous pensez. C'est ce que vous ne savez pas que vous ne savez pas.',
    author: 'Richard Saul Wurman'
  }
};
