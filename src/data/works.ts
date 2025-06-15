
import { Book, Presentation } from 'lucide-react';

export const worksContent = {
  title: 'Œuvres de Richard Saul Wurman',
  description: 'Découvrez les livres, conférences et expositions de Richard Saul Wurman.',
  tabs: [
    {
      value: 'books',
      trigger: 'Livres',
      icon: Book,
      content: {
        title: 'Publications Notables',
        description: 'Une sélection de livres qui ont marqué l’architecture de l’information et le design.',
        items: [
          {
            title: 'Information Architects',
            year: '1996',
            description: 'Un livre fondateur qui a défini et popularisé le terme "architecture de l’information". Co-édité avec Peter Bradford.',
            imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop'
          },
          {
            title: 'Understanding USA',
            year: '1999',
            description: 'Un projet ambitieux visant à rendre les données statistiques sur les États-Unis compréhensibles et accessibles à tous.',
            imageUrl: 'https://images.unsplash.com/photo-1583464587420-235b27357433?q=80&w=1974&auto=format&fit=crop'
          },
          {
            title: 'Information Anxiety',
            year: '1989',
            description: 'Wurman explore le phénomène de la surcharge d’information et propose des stratégies pour la surmonter.',
            imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop'
          },
        ]
      }
    },
    {
      value: 'conferences',
      trigger: 'Conférences',
      icon: Presentation,
      content: {
        title: 'TED : Technology, Entertainment, Design',
        description: 'En 1984, Richard Saul Wurman a fondé les conférences TED avec l\'objectif de rassembler des esprits brillants de différents domaines pour partager des "idées qui valent la peine d\'être diffusées".',
        items: [
          {
            title: 'La fondation de TED',
            year: '1984',
            description: 'La première conférence TED a eu lieu à Monterey, en Californie. Bien que déficitaire, elle a posé les bases d\'un phénomène mondial.',
            imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop'
          },
          {
            title: 'Un format innovant',
            year: '',
            description: 'Wurman a imposé un format de présentation de 18 minutes maximum pour garder les interventions concises, percutantes et engageantes.',
            imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop'
          },
          {
            title: 'Héritage',
            year: '2001',
            description: 'Après avoir organisé les conférences pendant des années, Wurman a vendu les droits à la fondation Sapling de Chris Anderson, assurant la pérennité de sa vision.',
            imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop'
          }
        ]
      }
    }
  ]
};
