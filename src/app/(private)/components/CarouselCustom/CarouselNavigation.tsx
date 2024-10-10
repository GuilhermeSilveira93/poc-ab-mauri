'use client'

import { CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

import { cn } from '@/lib/utils'

import { useCarouselNavigation } from '../../hooks/useCarouselNavigation'

export const CarouselNavigation = () => {
  const { count, current, NavigateTo } = useCarouselNavigation()
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex h-8 flex-row gap-5">
        <CarouselPrevious className="relative" />
        <CarouselNext className="relative" />
      </div>
      <div className="flex flex-row gap-2">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={`buttonNavigation${i}`}
            onClick={() => NavigateTo(i)}
            disabled={current === i + 1}
            className={cn(
              'h-2 w-2 rounded-full bg-foreground transition-all',
              current !== i + 1 && 'bg-foreground/20'
            )}
          />
        ))}
      </div>
    </div>
  )
}
