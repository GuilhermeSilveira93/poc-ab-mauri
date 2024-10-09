import { Button } from '@/components/ui/button'

import { Download } from 'lucide-react'

const RegulationsPage = async () => {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-bold tracking-tight max-sm:text-xl">
          Regulamento
        </h1>
        <h3 className="text-muted-text max-sm:text-sm">
          Conheça o regulamento para participar do programa de pontos.
        </h3>
      </div>
      <hr className="w-full" />
      <h2 className="text-2xl font-bold">What is Lorem Ipsum?</h2>
      <p className="text-justify leading-7">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ut iure
        quia odit non! Non molestiae, ab quisquam molestias fuga magnam beatae
        minima iusto ratione, libero aliquid voluptatibus explicabo! Vitae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nobis
        quae hic, recusandae, id ut neque debitis molestiae illo soluta quasi
        veritatis magni. Numquam maiores minima a ratione, distinctio neque.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        ipsum quam labore architecto voluptatibus tenetur illo. Quaerat possimus
        sint necessitatibus iusto eos? Suscipit amet hic quod deserunt veniam et
        dolore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
        illum nostrum incidunt unde repudiandae voluptatum tempore facilis
        veritatis eligendi atque. Hic aspernatur ratione laboriosam perspiciatis
        neque veritatis, soluta laudantium doloribus?
      </p>
      <h2 className="text-2xl font-bold">Where does it come from?</h2>
      <ul className="list-inside list-disc space-y-3 marker:text-gray-300">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Integer molestie lorem at massa</li>
        <li>Facilisis in pretium nisl aliquet</li>
        <li>Nulla volutpat aliquam velit</li>
      </ul>
      <h2 className="text-2xl font-bold">Where does it come from?</h2>
      <p className="text-justify leading-7">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima nemo
        ipsum incidunt enim perferendis aliquam autem inventore cumque cum
        tempore atque dolorum, consectetur aut placeat quis modi? Quisquam,
        repellendus hic! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Dolores, perspiciatis nulla quibusdam pariatur libero aspernatur
        amet rem officiis eos aut velit a? Quos mollitia quisquam eos eaque
        iusto nulla ullam! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Iusto accusantium ullam facilis voluptatum incidunt optio.
        Voluptate id distinctio ipsam deleniti veritatis repellat repudiandae
        doloribus. Voluptas provident eveniet vel odio quidem!
      </p>
      <h2 className="text-2xl font-bold">Where does it come from?</h2>
      <p className="text-justify leading-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        similique, quam nihil quibusdam pariatur ratione, aut iure porro quas
        neque debitis ducimus. Nisi reiciendis commodi ducimus excepturi
        voluptate labore esse? Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Eum cupiditate amet debitis maxime. Neque ratione
        pariatur harum aspernatur. Reiciendis delectus corrupti quis earum
        assumenda nihil vero! Quam, nam. Corrupti, ab? Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Molestiae impedit incidunt id quod
        dolorum commodi corporis earum facilis libero suscipit, neque harum odit
        tenetur. Amet natus reiciendis accusamus! In, hic?
      </p>
      <Button className="fixed bottom-3 right-3">
        <Download />
      </Button>
    </div>
  )
}
export default RegulationsPage
