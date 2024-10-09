import { Skeleton } from '@/components/ui/skeleton'
const CardHankingSkeleton = () => {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      <Skeleton className="h-28 w-full rounded-xl" />
      <Skeleton className="h-28 w-full rounded-xl" />
      <Skeleton className="h-28 w-full rounded-xl" />
      <Skeleton className="h-28 w-full rounded-xl" />
    </div>
  )
}
export default CardHankingSkeleton
