
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { worksContent } from '@/data/works';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Works = () => {
  useDocumentMeta(worksContent.title, worksContent.description);

  return (
    <div className="container py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold">{worksContent.title}</h1>
        <p className="mt-4 text-xl text-gray-600">{worksContent.description}</p>
      </div>
      
      <Tabs defaultValue={worksContent.tabs[0].value} className="mt-12">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
          {worksContent.tabs.map(tab => (
            <TabsTrigger key={tab.value} value={tab.value}>
              <tab.icon className="mr-2" />
              {tab.trigger}
            </TabsTrigger>
          ))}
        </TabsList>

        {worksContent.tabs.map(tab => (
          <TabsContent key={tab.value} value={tab.value} className="mt-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">{tab.content.title}</h2>
              <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">{tab.content.description}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tab.content.items.map((item, index) => (
                <Card key={index} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    {item.year && <p className="text-sm text-gray-500 mt-1">{item.year}</p>}
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-700">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
export default Works;
