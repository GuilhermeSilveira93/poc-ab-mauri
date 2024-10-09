'use client'
import { useEffect, useState } from 'react'

import { Carousel, type CarouselApi } from '@/components/ui/carousel'

import { createContext } from 'use-context-selector'

interface CarouselContextInterface {
  current: number
  count: number
  NavigateTo: (target: number) => void
}
export const CarouselContext = createContext({} as CarouselContextInterface)

export default function CarouselROOT({
  children,
}: {
  children: React.ReactNode
}) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(1)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
    return () => {
      api.destroy()
    }
  }, [api])

  const NavigateTo = (target: number) => {
    api?.scrollTo(target)
  }
  return (
    <CarouselContext.Provider value={{ count, current, NavigateTo }}>
      <Carousel
        className="space-y-1"
        opts={{
          active: true,
          loop: true,
        }}
        setApi={setApi}
      >
        {children}
      </Carousel>
    </CarouselContext.Provider>
  )
}
