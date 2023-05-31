import React from "react"

import { cn } from "@/lib/utils"

export type CarouselProps = {
  children: React.ReactNode
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("carosuel", className)} {...props}>
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

export { Carousel, CarouselViewport, CarouselContainer, CarouselSlide }
