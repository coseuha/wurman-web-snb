
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { resourcesContent } from '@/data/resources';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';

const Resources = () => {
  useDocumentMeta(resourcesContent.title, resourcesContent.description);

  return (
    <div className="container py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold">{resourcesContent.title}</h1>
        <p className="mt-4 text-xl text-gray-600">{resourcesContent.description}</p>
      </div>

      <div className="space-y-16">
        {resourcesContent.sections.map((section, index) => (
          <section key={index}>
            <div className="flex items-center mb-8">
              <section.icon className="w-8 h-8 mr-4 text-accent-blue" />
              <h2 className="text-3xl font-bold">{section.title}</h2>
            </div>
            
            {(section as any).imageUrl && (
              <div className="mb-8">
                <img src={(section as any).imageUrl} alt={section.title} className="w-full h-auto max-h-96 object-cover rounded-lg shadow-md" />
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-8">
              {section.items.map((item, itemIndex) => (
                <a href={item.link} target="_blank" rel="noopener noreferrer" key={itemIndex} className="block group">
                  <Card className="h-full transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <ArrowUpRight className="w-5 h-5 text-gray-400 transition-transform duration-300 group-hover:text-accent-blue group-hover:rotate-45" />
                      </div>
                      <CardDescription>{item.source}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{item.description}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Resources;

