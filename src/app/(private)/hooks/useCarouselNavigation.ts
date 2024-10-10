import { CarouselContext } from '../components/CarouselCustom/Carousel'

import { useContextSelector } from 'use-context-selector'

export const useCarouselNavigation = () => {
  const count = useContextSelector(CarouselContext, (context) => context.count)
  const current = useContextSelector(
    CarouselContext,
    (context) => context.current
  )
  const NavigateTo = useContextSelector(
    CarouselContext,
    (context) => context.NavigateTo
  )

  return { count, current, NavigateTo }
}
