import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react"

import {
  Carousel,
  CarouselContainer,
  CarouselControls,
  CarouselIndicators,
  CarouselSlide,
  CarouselViewport,
} from "@/components/ui/carousel"

export function CarouselNavigationDemo() {
  const [ref, api] = useEmblaCarousel({ loop: true })

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api])
  const scrollNext = useCallback(() => api?.scrollNext(), [api])

  const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api])

  const onInit = useCallback((api: EmblaCarouselType) => {
    setScrollSnaps(api.scrollSnapList())
  }, [])

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap())
    setPrevBtnEnabled(api.canScrollPrev())
    setNextBtnEnabled(api.canScrollNext())
  }, [])

  useEffect(() => {
    if (!api) return

    onInit(api)
    onSelect(api)
    api.on("reInit", onInit)
    api.on("reInit", onSelect)
    api.on("select", onSelect)
  }, [api, onInit, onSelect])

  return (
    <>
      <Carousel>
        <CarouselViewport className="rounded-md" ref={ref}>
          <CarouselContainer>
            <CarouselSlide>
              <Image
                className="w-full"
                src="https://images.unsplash.com/photo-1682685797736-dabb341dc7de?w=600&q=80"
                alt="Hisma Desert - NEOM Saudi Arabia"
                width={600}
                height={400}
              />
            </CarouselSlide>
            <CarouselSlide>
              <Image
                className="w-full"
                src="https://images.unsplash.com/photo-1682685796766-0fddd3e480de?w=600&q=80"
                alt="Hisma Desert - NEOM Saudi Arabia"
                width={600}
                height={400}
              />
            </CarouselSlide>
            <CarouselSlide>
              <Image
                className="w-full"
                src="https://images.unsplash.com/photo-1682687220499-d9c06b872eee?w=600&q=80"
                alt="Hisma Desert - NEOM Saudi Arabia"
                width={600}
                height={400}
              />
            </CarouselSlide>
          </CarouselContainer>
        </CarouselViewport>
        <CarouselControls
          onClickPrev={scrollPrev}
          onClickNext={scrollNext}
          prevBtnEnabled={prevBtnEnabled}
          nextBtnEnabled={nextBtnEnabled}
        />
        <CarouselIndicators
          activeIndex={selectedIndex}
          onClickIndicator={scrollTo}
          snaps={scrollSnaps}
        />
      </Carousel>
    </>
  )
}
