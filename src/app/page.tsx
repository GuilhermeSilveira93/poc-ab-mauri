import CardHanking from './components/CardHanking/CardHanking'
import { CarouselPage } from './components/CarouselPage'
import DesempenhoGeral from './components/DesempenhoGeral'
import RolesInformation from './components/Roles'

const Home = async () => {
  return (
    <>
      <div className="space-y-1">
        <CarouselPage />
        <CardHanking />
      </div>
      <div>
        <RolesInformation />
      </div>
      <div>
        <DesempenhoGeral />
      </div>
    </>
  )
}
export default Home
