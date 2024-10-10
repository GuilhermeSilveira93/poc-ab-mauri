import Image from 'next/image'

import { CarouselContent, CarouselItem } from '@/components/ui/carousel'

import delay from '@/utils/delay'

import { CustomCarousel } from './CarouselCustom'
export const CarouselPage = async () => {
  await delay(3)
  return (
    <section>
      <CustomCarousel.ROOT>
        <CarouselContent>
          {Array.from({ length: 2 }).map((_, index) => (
            <CarouselItem key={index} className="relative">
              <Image
                className="h-28 w-full rounded-2xl object-cover md:h-52 lg:h-80"
                style={{ objectFit: 'cover' }}
                height={100}
                width={1920}
                alt={`ImageBanner${index}`}
                src={`https://poc-abb.vercel.app/_next/image?url=%2Fbanner-${index + 1}.jpg&w=1920&q=100`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CustomCarousel.Navigation />
      </CustomCarousel.ROOT>
    </section>
  )
}
