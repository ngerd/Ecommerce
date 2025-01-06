import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import Image from "next/image";


function Slider({sliderList}) {
  const backendBaseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

  return (
      <Carousel>
      <CarouselContent>
        {/*sliderList.map((slider, index) => {
          // const imageUrl = backendBaseUrl+slider?.image?.url;

          return (
            <CarouselItem key={slider.id || index}> 
              <Image
                src={'/4171375.jpg'}
                width={1000}
                height={400}
                alt="slider"
                className="w-full h-[200px] md:h-[400px] object-cover rounded-2xl"
              />
              
              {/* {slider.image && slider.image.length > 0 ? (
                slider.image.map((img, imgIndex) => {
                  const imageUrl = backendBaseUrl + (img.url || "");

                  if(!img.url) {
                    return <p key={imgIndex}>Invalid image URL</p>
                  }
                  return (
                    <Image
                      key={img.id || imgIndex}
                      src={imageUrl}
                      width={1000}
                      height={400}
                      alt={img.name || "Slider Image"}
                      className="w-full h-[400px] object-cover rounded-2xl"
                    />
                  );
                })
              ) : (
                <p>No image available</p>
              )} 
            </CarouselItem>
          );
        })}*/}
        
        <CarouselItem>
          <Image
                src={'/4171375.jpg'}
                width={1000}
                height={400}
                alt="slider"
                className="w-full h-[200px] md:h-[400px] object-cover rounded-2xl"
              />
        </CarouselItem>

        <CarouselItem>
          <Image
                src={'/4171359.jpg'}
                width={1000}
                height={400}
                alt="slider"
                className="w-full h-[200px] md:h-[400px] object-cover rounded-2xl"
              />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

//     <Carousel>
//       <CarouselContent>
//       {sliderList.map((slider, index) => {
//       return (
//         <CarouselItem key={slider.id || index}>
//           {slider.image && slider.image.length > 0 ? (
//             slider.image.map((img, imgIndex) => {
//               // Ensure valid URL construction
//               const imageUrl = img.url ? `${backendBaseUrl}${img.url}` : null;

//               if (!imageUrl) {
//                 console.warn("Invalid image URL for slider:", slider);
//                 return <p key={imgIndex}>Invalid image</p>;
//               }

//               return (
//                 <div key={img.id || imgIndex} className="relative w-full h-[400px]">
//                   <Image
//                     src={imageUrl}
//                     alt={img.name || "Slider Image"}
//                     layout="fill" // Ensures the image spans its parent container
//                     objectFit="cover" // Ensures the image is properly cropped
//                     className="rounded-2xl"
//                   />
//                 </div>
//               );
//             })
//           ) : (
//             <p>No image available</p>
//           )}
//         </CarouselItem>
//       );
// })}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>

  )
}

export default Slider
