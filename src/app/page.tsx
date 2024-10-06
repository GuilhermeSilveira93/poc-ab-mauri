import { CarouselPage } from './components/CarouselPage'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { User } from 'lucide-react'
export default function Home() {
  return (
    <div className="px-5 pb-16 sm:p-5 space-y-1">
      <CarouselPage />
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-h-34 h-34">
        <Card>
          <CardHeader className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Grupo</CardTitle>
            <User className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">VENDEDORES</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Ranking trimestral</CardTitle>
            <User className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">#4</p>
            <p className="text-primary font-bold text-right">Ver ranking</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Ranking anual</CardTitle>
            <User className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">#3</p>
            <p className="text-primary font-bold text-right">Ver detalhes</p>
          </CardContent>
        </Card>
        <Card className="bg-primary text-primary-foreground">
          <CardHeader className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Premiação acumulada</CardTitle>
            <User className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">R$ 4.000,00</p>
            <p className="text-primary-foreground/50 font-bold text-right">
              Resgatar Prêmio
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
