
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { galleryContent } from '@/data/gallery';
import { Card, CardContent } from '@/components/ui/card';

const Gallery = () => {
  useDocumentMeta(galleryContent.title, galleryContent.description);

  return (
    <div className="container py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold">{galleryContent.title}</h1>
        <p className="mt-4 text-xl text-gray-600">{galleryContent.description}</p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {galleryContent.images.map((image, index) => (
          <div key={index} className="break-inside-avoid">
            <Card className="overflow-hidden group border-0 shadow-md">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <CardContent className="p-4 bg-white">
                <p className="text-sm text-gray-700">{image.caption}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
