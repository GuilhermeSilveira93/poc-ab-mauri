import { Skeleton } from '@/components/ui/skeleton'

const DesempenhoGeralSkeleton = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <Skeleton className="h-8 w-96" />
        <Skeleton className="h-8 w-80" />
        <Skeleton className="h-8 w-5/12" />
      </div>
      <div className="grid grid-rows-2 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Skeleton className="h-28 min-w-full rounded-xl" />
        <Skeleton className="h-28 min-w-full rounded-xl" />
        <Skeleton className="h-28 min-w-full rounded-xl" />
        <Skeleton className="h-28 min-w-full rounded-xl" />
        <Skeleton className="h-28 min-w-full rounded-xl" />
        <Skeleton className="h-28 min-w-full rounded-xl" />
      </div>
    </div>
  )
}
export default DesempenhoGeralSkeleton
