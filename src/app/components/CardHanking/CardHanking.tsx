import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { cn } from '@/lib/utils'
import { User, Trophy, DollarSign } from 'lucide-react'
const GroupHanking = [
  {
    title: 'Grupo',
    icon: User,
    content: 'VENDEDORES',
  },
  {
    title: 'Ranking Trimestral',
    icon: Trophy,
    content: '#4',
    footer: 'Ver Hanking',
    data: [
      {
        position: 1,
        name: 'Schmitt LLC',
        score: 410,
      },
      {
        position: 2,
        name: 'Boyer LLC',
        score: 276,
      },
      {
        position: 3,
        name: 'Ortiz - Treutel',
        score: 141,
      },
      {
        position: 4,
        name: 'Metz, Muller and Bashirian',
        score: 28,
      },
      {
        position: 5,
        name: 'Ratke Group',
        score: 7,
      },
    ],
  },
  {
    title: 'Ranking anual',
    icon: Trophy,
    content: '#3',
    footer: 'Ver Hanking',
    data: [
      {
        position: 1,
        name: 'Reichel - Wehner',
        score: 430,
      },
      {
        position: 2,
        name: 'Romaguera, Hintz and Hodkiewicz',
        score: 244,
      },
      {
        position: 3,
        name: 'Gibson, Lubowitz and Mayer',
        score: 174,
      },
      {
        position: 4,
        name: 'Homenick - Hahn',
        score: 116,
      },
      {
        position: 5,
        name: 'Little, Berge and Barrows',
        score: 28,
      },
    ],
  },
  {
    title: 'Premiação acumulada',
    icon: DollarSign,
    content: 'R$ 4.000,00',
    footer: 'Resgatar Prêmio',
  },
]

const CardHanking = () => {
  return (
    <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {GroupHanking.map(({ icon: Icon, ...grupo }, i) => {
        return (
          <Card
            key={grupo.title}
            className={cn(
              GroupHanking.length === i + 1 &&
                'bg-primary text-primary-foreground'
            )}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
              <CardTitle>{grupo.title}</CardTitle>
              <Icon className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{grupo.content}</p>
            </CardContent>
            {grupo.footer && (
              <CardFooter className="justify-end">
                <Dialog>
                  <DialogTrigger
                    disabled={!grupo.data}
                    className={cn(
                      'font-bold text-primary',
                      GroupHanking.length === i + 1 &&
                        'font-bold text-primary-foreground/50'
                    )}
                  >
                    {grupo.footer}
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{grupo.title}</DialogTitle>
                    </DialogHeader>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Posição</TableHead>
                          <TableHead>Participante</TableHead>
                          <TableHead>Pontos</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {grupo?.data?.map((data) => {
                          return (
                            <TableRow key={data.name}>
                              <TableCell className="font-medium">
                                {data.position}
                              </TableCell>
                              <TableCell>{data.name}</TableCell>
                              <TableCell>{data.score}</TableCell>
                            </TableRow>
                          )
                        })}
                      </TableBody>
                    </Table>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            )}
          </Card>
        )
      })}
    </section>
  )
}
export default CardHanking
