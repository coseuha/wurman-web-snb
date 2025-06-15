
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { infoArchitectureContent } from '@/data/infoArchitecture';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Quote } from 'lucide-react';

const InfoArchitecture = () => {
  useDocumentMeta(infoArchitectureContent.title, infoArchitectureContent.description);

  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">{infoArchitectureContent.title}</h1>
          <p className="mt-4 text-xl text-gray-600">{infoArchitectureContent.introduction}</p>
        </div>

        {(infoArchitectureContent as any).imageUrl && (
            <div className="mb-16">
                <img 
                    src={(infoArchitectureContent as any).imageUrl} 
                    alt="Visualisation de l'information" 
                    className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-md"
                />
            </div>
        )}

        <section id="latch" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-2">{infoArchitectureContent.latch.title}</h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">{infoArchitectureContent.latch.description}</p>
          <Accordion type="single" collapsible className="w-full bg-white p-4 sm:p-8 rounded-lg shadow-md border border-gray-200">
            {infoArchitectureContent.latch.principles.map(item => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger className="text-xl font-semibold hover:no-underline text-left">{item.title}</AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700 leading-relaxed">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <div className="text-center">
            <blockquote className="relative p-8 text-2xl font-semibold leading-9 text-gray-900 border-l-4 border-accent-blue bg-gray-50 rounded-r-lg">
                <Quote className="absolute top-4 left-4 h-8 w-8 text-accent-blue opacity-25" />
                <p>{infoArchitectureContent.quote.text}</p>
                <footer className="mt-4 text-lg font-medium text-gray-600">— {infoArchitectureContent.quote.author}</footer>
            </blockquote>
        </div>
      </div>
    </div>
  );
};

export default InfoArchitecture;

