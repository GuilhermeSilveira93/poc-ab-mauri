import { Skeleton } from '@/components/ui/skeleton'

const RolesInformationSkeleton = () => {
  return (
    <>
      <div className="h-5 w-full bg-secondary">
         <Skeleton className="h-full w-full" /> 
        <p className="bg-blue-500 text-2xl">asfdasf</p>
      </div>
    </>
  )
}
export default RolesInformationSkeleton
