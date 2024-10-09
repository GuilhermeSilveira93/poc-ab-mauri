import { Skeleton } from '@/components/ui/skeleton'
const CarouselSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-28 w-full rounded-2xl md:h-52 lg:h-80" />
      <div className="flex flex-row items-center justify-between">
        <div className="flex h-8 flex-row gap-5">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
        <div className="flex flex-row gap-2">
          <Skeleton className={'h-2 w-2 rounded-full'} />
          <Skeleton className={'h-2 w-2 rounded-full'} />
        </div>
      </div>
    </div>
  )
}
export default CarouselSkeleton
