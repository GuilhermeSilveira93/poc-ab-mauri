import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
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
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { cn } from '@/lib/utils'
import delay from '@/utils/delay'
import { Trophy } from 'lucide-react'
const desempenho = [
  {
    trimestre: 1,
    ingredientes: [
      { tipo: 'FERMENTO', atingimento: 70, pontos: 30 },
      { tipo: 'BOLO', atingimento: 100, pontos: 20 },
      { tipo: 'CHANTILLY', atingimento: 50, pontos: 10 },
      { tipo: 'INGRED OUTROS', atingimento: 90, pontos: 10 },
      { tipo: 'OVO / CHOCO', atingimento: 80, pontos: 20 },
      { tipo: 'TW', atingimento: 100, pontos: 10 },
    ],
  },
  {
    trimestre: 2,
    ingredientes: [
      { tipo: 'FERMENTO', atingimento: 70, pontos: 30 },
      { tipo: 'BOLO', atingimento: 100, pontos: 20 },
      { tipo: 'CHANTILLY', atingimento: 50, pontos: 10 },
      { tipo: 'INGRED OUTROS', atingimento: 90, pontos: 10 },
      { tipo: 'OVO / CHOCO', atingimento: 80, pontos: 20 },
      { tipo: 'TW', atingimento: 100, pontos: 10 },
    ],
  },
  {
    trimestre: 3,
    ingredientes: [
      { tipo: 'FERMENTO', atingimento: 70, pontos: 30 },
      { tipo: 'BOLO', atingimento: 100, pontos: 20 },
      { tipo: 'CHANTILLY', atingimento: 50, pontos: 10 },
      { tipo: 'INGRED OUTROS', atingimento: 90, pontos: 10 },
      { tipo: 'OVO / CHOCO', atingimento: 80, pontos: 20 },
      { tipo: 'TW', atingimento: 100, pontos: 10 },
    ],
  },
  {
    trimestre: 4,
    ingredientes: [
      { tipo: 'FERMENTO', atingimento: 70, pontos: 30 },
      { tipo: 'BOLO', atingimento: 100, pontos: 20 },
      { tipo: 'CHANTILLY', atingimento: 50, pontos: 10 },
      { tipo: 'INGRED OUTROS', atingimento: 90, pontos: 10 },
      { tipo: 'OVO / CHOCO', atingimento: 80, pontos: 20 },
      { tipo: 'TW', atingimento: 100, pontos: 10 },
    ],
  },
]
const DesempenhoGeral = async () => {
  await delay(7)
  return (
    <Tabs defaultValue="1">
      <TabsList>
        {desempenho.map((value) => {
          return (
            <TabsTrigger
              key={value.trimestre}
              value={value.trimestre.toString()}
            >
              Trimestre {value.trimestre}
            </TabsTrigger>
          )
        })}
      </TabsList>
      {desempenho.map((value) => {
        return (
          <div key={value.trimestre + 'tabContent'}>
            <TabsContent value={value.trimestre.toString()} className="mb-10">
              <div className="space-y-0.5">
                <h1 className="text-2xl font-bold tracking-tight max-sm:text-xl">
                  Volume - Desempenho geral
                </h1>
                <h2 className="text-muted-text max-sm:text-sm">
                  Acompanhe as suas métricas de desempenho e performance.
                </h2>
              </div>
              <hr className="my-6 h-[1px] w-full shrink-0 bg-border" />
              <section className="grid grid-rows-2 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {value.ingredientes.map((ingrediente) => {
                  const percentWidth = `${ingrediente.atingimento}%`
                  return (
                    <Card key={ingrediente.tipo}>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
                        <CardTitle>{ingrediente.tipo}</CardTitle>
                        <Trophy className="h-4 w-4" />
                      </CardHeader>
                      <CardContent>
                        <p>Atingimento: {percentWidth}</p>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-primary/20">
                          <div
                            className={cn('h-2 bg-primary')}
                            style={{ width: percentWidth }}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </section>
              <div className="text-right">
                <Dialog>
                  <DialogTrigger className="text-lg font-bold text-primary">
                    Ver Detalhes
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Visualize seu desempenho</DialogTitle>
                    </DialogHeader>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>VOLUME</TableHead>
                          <TableHead>META</TableHead>
                          <TableHead>REAL</TableHead>
                          <TableHead>%</TableHead>
                          <TableHead className="text-right">PONTOS</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {value.ingredientes.map((data) => {
                          return (
                            <TableRow key={data.tipo}>
                              <TableCell className="font-medium">
                                {data.tipo}
                              </TableCell>
                              <TableCell>R$ - </TableCell>
                              <TableCell>R$ - </TableCell>
                              <TableCell>{data.atingimento}</TableCell>
                              <TableCell className="text-right">
                                {data.pontos}
                              </TableCell>
                            </TableRow>
                          )
                        })}
                      </TableBody>
                      <TableFooter>
                        <TableRow>
                          <TableCell>Total</TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell className="text-right">100</TableCell>
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </DialogContent>
                </Dialog>
              </div>
            </TabsContent>
            <TabsContent value={value.trimestre.toString()} className="mb-10">
              <div className="space-y-0.5">
                <h1 className="text-2xl font-bold tracking-tight max-sm:text-xl">
                  Volume - Desempenho geral
                </h1>
                <h2 className="text-muted-text max-sm:text-sm">
                  Acompanhe as suas métricas de desempenho e performance.
                </h2>
              </div>
              <hr className="my-6 h-[1px] w-full shrink-0 bg-border" />
              <section className="grid grid-rows-2 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {value.ingredientes.map((ingrediente) => {
                  const percentWidth = `${ingrediente.atingimento}%`
                  return (
                    <Card key={ingrediente.tipo}>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
                        <CardTitle>{ingrediente.tipo}</CardTitle>
                        <Trophy className="h-4 w-4" />
                      </CardHeader>
                      <CardContent>
                        <p>Atingimento: {percentWidth}</p>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-primary/20">
                          <div
                            className={cn('h-2 bg-primary')}
                            style={{ width: percentWidth }}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </section>
              <div className="text-right">
                <Dialog>
                  <DialogTrigger className="text-lg font-bold text-primary">
                    Ver Detalhes
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Visualize seu desempenho</DialogTitle>
                    </DialogHeader>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>VOLUME</TableHead>
                          <TableHead>META</TableHead>
                          <TableHead>REAL</TableHead>
                          <TableHead>%</TableHead>
                          <TableHead className="text-right">PONTOS</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {value.ingredientes.map((data) => {
                          return (
                            <TableRow key={data.tipo}>
                              <TableCell className="font-medium">
                                {data.tipo}
                              </TableCell>
                              <TableCell>R$ - </TableCell>
                              <TableCell>R$ - </TableCell>
                              <TableCell>{data.atingimento}</TableCell>
                              <TableCell className="text-right">
                                {data.pontos}
                              </TableCell>
                            </TableRow>
                          )
                        })}
                      </TableBody>
                      <TableFooter>
                        <TableRow>
                          <TableCell>Total</TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell className="text-right">100</TableCell>
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </DialogContent>
                </Dialog>
              </div>
            </TabsContent>
          </div>
        )
      })}
    </Tabs>
  )
}

export default DesempenhoGeral
