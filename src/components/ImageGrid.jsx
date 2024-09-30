// src/app/page.js (or any other component file)

import Image from 'next/image';

const images = [
  '/mtn.jpg',
  '/airtel.png',
  '/glo.jpg',
  '/9mobile.png',
  '/dstv.png',
  '/gotv.png',
  '/showmax.png',
];

export default function ImageGrid() {
  return (
    <div className="container max-w-3xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((src, index) => (
          <div key={index} className="w-20 h-20">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={80}
              height={80}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
