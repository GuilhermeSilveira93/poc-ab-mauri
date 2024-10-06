'use client'

import { CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

import { useCarouselNavigation } from '@/app/hooks/useCarouselNavigation'
import { cn } from '@/lib/utils'

export const CarouselNavigation = () => {
  const { count, current, NavigateTo } = useCarouselNavigation()
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="h-8 flex flex-row gap-5">
        <CarouselPrevious className="relative" />
        <CarouselNext className="relative" />
      </div>
      <div className=" flex flex-row gap-2">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={`buttonNavigation${i}`}
            onClick={() => NavigateTo(i)}
            disabled={current === i + 1}
            className={cn(
              'bg-foreground w-2 h-2 rounded-full transition-all',
              current !== i + 1 && 'bg-foreground/20'
            )}
          />
        ))}
      </div>
    </div>
  )
}
