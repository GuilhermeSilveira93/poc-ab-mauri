import { Suspense } from 'react'

import CardHanking from './components/CardHanking/CardHanking'
import { CarouselPage } from './components/Carousel'
import DesempenhoGeral from './components/DesempenhoGeral'
import RolesInformation from './components/Roles'

import CardHankingSkeleton from '@/@sheketons/home/CardHankingSkeleton'
import CarouselSkeleton from '@/@sheketons/home/CarouselSkeleton'
import DesempenhoGeralSkeleton from '@/@sheketons/home/DesempenhoGeralSkeleton'
import RolesInformationSkeleton from '@/@sheketons/home/RolesInformationSkeleton'

const Home = async () => {
  return (
    <>
      <div className="space-y-1">
        <Suspense fallback={<CarouselSkeleton />}>
          <CarouselPage />
        </Suspense>
        <Suspense fallback={<CardHankingSkeleton />}>
          <CardHanking />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<RolesInformationSkeleton />}>
          <RolesInformation />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<DesempenhoGeralSkeleton />}>
          <DesempenhoGeral />
        </Suspense>
      </div>
    </>
  )
}
export default Home
