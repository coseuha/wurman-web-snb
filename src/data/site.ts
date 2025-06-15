
import { Book, Briefcase, FileText, GalleryHorizontal, Home, Mail, MessageSquare } from 'lucide-react';

export const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/a-propos' },
  { name: 'Œuvres', path: '/oeuvres' },
  { name: 'Architecture de l’Information', path: '/architecture-information' },
  { name: 'Galerie', path: '/galerie' },
  { name: 'Ressources', path: '/ressources' },
  { name: 'Contact', path: '/contact' },
];

export const footerInfo = {
  credits: `© ${new Date().getFullYear()} Richard Saul Wurman. Tous droits réservés.`,
  socials: [
    { name: 'Twitter', url: '#', icon: 'Twitter' },
    { name: 'LinkedIn', url: '#', icon: 'Linkedin' },
  ]
};
