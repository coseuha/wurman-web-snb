import { BookOpen, Lightbulb, Users } from 'lucide-react';

export const homeContent = {
  hero: {
    title: "L'Architecte de l'Information",
    subtitle: "Pionnier de l'organisation de la connaissance et fondateur de TED.",
    cta: "Découvrir son Œuvre",
    ctaLink: "/oeuvres"
  },
  featureCards: [
    {
      Icon: BookOpen,
      title: "Biographie",
      description: "Découvrez l'histoire et les réalisations de Richard Saul Wurman.",
      link: "/a-propos"
    },
    {
      Icon: Lightbulb,
      title: "Œuvres",
      description: "Explorez ses livres, conférences et projets innovants.",
      link: "/oeuvres"
    },
    {
      Icon: Users,
      title: "Contact",
      description: "Entrez en contact avec Richard Saul Wurman.",
      link: "/contact"
    }
  ],
  quote: {
    text: "L'information n'est pas ce que vous pensez. C'est ce que vous ne savez pas.",
    author: "Richard Saul Wurman"
  }
};
