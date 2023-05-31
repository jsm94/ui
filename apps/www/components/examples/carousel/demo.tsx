import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"

import {
  Carousel,
  CarouselContainer,
  CarouselSlide,
  CarouselViewport,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  const [ref] = useEmblaCarousel({ loop: true })

  return (
    <Carousel>
      <CarouselViewport ref={ref}>
        <CarouselContainer>
          <CarouselSlide key={1}>
            <Image
              src="https://images.unsplash.com/photo-1682685797736-dabb341dc7de?w=600&q=80"
              alt="Hisma Desert - NEOM Saudi Arabia"
              width={600}
              height={400}
            />
          </CarouselSlide>
          <CarouselSlide key={2}>
            <Image
              src="https://images.unsplash.com/photo-1682685796766-0fddd3e480de?w=600&q=80"
              alt="Hisma Desert - NEOM Saudi Arabia"
              width={600}
              height={400}
            />
          </CarouselSlide>
          <CarouselSlide key={3}>
            <Image
              src="https://images.unsplash.com/photo-1682687220499-d9c06b872eee?w=600&q=80"
              alt="Hisma Desert - NEOM Saudi Arabia"
              width={600}
              height={400}
            />
          </CarouselSlide>
        </CarouselContainer>
      </CarouselViewport>
    </Carousel>
  )
}
