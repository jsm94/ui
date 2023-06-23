import React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

import { Badge } from "./badge"
import { Button } from "./button"

export type CarouselProps = {
  children: React.ReactNode
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("carousel relative", className)} {...props}>
      {children}
    </div>
  )
})
Carousel.displayName = "Carousel"

const CarouselViewport = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("overflow-hidden", className)} {...props}>
      {children}
    </div>
  )
})
CarouselViewport.displayName = "CarouselViewport"

const CarouselContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("flex", className)} {...props}>
      {children}
    </div>
  )
})
CarouselContainer.displayName = "CarouselContainer"

const CarouselSlide = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("shrink-0 grow-0 basis-full", className)}
      {...props}
    >
      {children}
    </div>
  )
})
CarouselSlide.displayName = "CarouselSlide"

type CarouselControlsProps = {
  onClickNext?: () => void
  onClickPrev?: () => void
  prevBtnEnabled?: boolean
  nextBtnEnabled?: boolean
}

const CarouselControls = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselControlsProps
>(
  (
    {
      className,
      onClickNext,
      onClickPrev,
      prevBtnEnabled,
      nextBtnEnabled,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn("flex", className)} {...props}>
        <Button
          className="absolute inset-y-1/2 left-2 flex"
          variant="ghost"
          size="sm"
          onClick={onClickPrev}
          disabled={!prevBtnEnabled}
        >
          <ChevronLeft />
        </Button>
        <Button
          className="absolute inset-y-1/2 right-2 flex"
          variant="ghost"
          size="sm"
          onClick={onClickNext}
          disabled={!nextBtnEnabled}
        >
          <ChevronRight />
        </Button>
      </div>
    )
  }
)
CarouselControls.displayName = "CarouselControls"

type CarouselIndicatorsProps = {
  activeIndex?: number
  onClickIndicator?: (index: number) => void
  snaps?: number[]
}

const CarouselIndicators = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselIndicatorsProps
>(({ className, activeIndex, onClickIndicator, snaps, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-x-0 bottom-2 flex items-center justify-center gap-4",
        className
      )}
      {...props}
    >
      {snaps?.map((_, index) => (
        <button key={index} onClick={() => onClickIndicator?.(index)}>
          <Badge
            className="cursor-pointer"
            variant={activeIndex === index ? "secondary" : "default"}
          />
        </button>
      ))}
    </div>
  )
})
CarouselIndicators.displayName = "CarouselIndicator"

export {
  Carousel,
  CarouselViewport,
  CarouselContainer,
  CarouselSlide,
  CarouselControls,
  CarouselIndicators,
}
