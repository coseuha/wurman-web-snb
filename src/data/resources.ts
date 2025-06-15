
import { Link, Mic, FileText } from 'lucide-react';

export const resourcesContent = {
  title: 'Ressources',
  description: 'Articles, interviews et autres ressources pour approfondir le travail de Richard Saul Wurman.',
  sections: [
    {
      title: 'Articles et Essais',
      icon: FileText,
      imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop',
      items: [
        {
          title: 'Hats: A Metaphor for Information',
          source: 'AIGA Journal',
          description: 'Un essai où Wurman discute de sa théorie des "cinq chapeaux" pour l\'organisation de l\'information.',
          link: '#'
        },
        {
          title: 'The Business of Understanding',
          source: 'Fast Company',
          description: 'Un profil sur Wurman et son approche pour rendre les informations complexes compréhensibles.',
          link: '#'
        },
      ]
    },
    {
      title: 'Interviews et Entretiens',
      icon: Mic,
      imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop',
      items: [
        {
          title: 'On the Future of Learning',
          source: 'Design Matters Podcast',
          description: 'Debbie Millman interviewe Wurman sur sa vision de l\'éducation et de l\'apprentissage.',
          link: '#'
        },
        {
          title: 'A Conversation with the Founder of TED',
          source: 'NPR',
          description: 'Un entretien rétrospectif sur la création et l\'évolution des conférences TED.',
          link: '#'
        },
      ]
    },
    {
      title: 'Liens Externes',
      icon: Link,
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
      items: [
        {
          title: 'Le site officiel de Richard Saul Wurman',
          source: 'wurman.com',
          description: 'Explorez ses projets actuels et ses archives personnelles.',
          link: '#'
        },
        {
          title: 'TED: Ideas Worth Spreading',
          source: 'ted.com',
          description: 'Découvrez des milliers de conférences inspirées par sa vision originale.',
          link: '#'
        },
      ]
    }
  ]
};

