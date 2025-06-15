
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  useDocumentMeta('Contact | Richard Saul Wurman', 'Contactez-nous pour toute question ou proposition de collaboration.');
  return (
    <div className="container py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold">Contactez-nous</h1>
        <p className="mt-4 text-lg text-gray-600">Nous sommes toujours ravis d’entendre vos questions, commentaires ou propositions de collaboration. N’hésitez pas à nous contacter via le formulaire ci-dessous.</p>
      </div>
      <form className="max-w-2xl mx-auto mt-12 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Votre Nom</label>
          <Input id="name" type="text" placeholder="John Doe" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Votre Email</label>
          <Input id="email" type="email" placeholder="john.doe@example.com" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Votre Message</label>
          <Textarea id="message" placeholder="Votre message..." rows={6} required />
        </div>
        <div>
          <Button type="submit" className="w-full bg-accent-blue hover:bg-blue-600">
            Envoyer le Message
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
