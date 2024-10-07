import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
const DesempenhoGeral = () => {
  return (
    <Tabs defaultValue="trimestre1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="trimestre1">Trimestre 1</TabsTrigger>
        <TabsTrigger value="trimestre2">Trimestre 2</TabsTrigger>
        <TabsTrigger value="trimestre3">Trimestre 3</TabsTrigger>
        <TabsTrigger value="trimestre4">Trimestre 4</TabsTrigger>
      </TabsList>
      <TabsContent value="trimestre1">
        <h1>Volume - Desempenho geral</h1>
        <h2>Acompanhe as suas métricas de desempenho e performance.</h2>
        <hr />
        <section className="grid w-full max-w-screen-2xl grid-flow-row grid-cols-3 grid-rows-2">
          <Card>
            <CardHeader>
              <CardTitle>FERMENTO</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>FERMENTO</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>FERMENTO</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>FERMENTO</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>FERMENTO</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>FERMENTO</CardTitle>
            </CardHeader>
          </Card>
        </section>
      </TabsContent>
      <TabsContent value="trimestre2">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="trimestre3">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="trimestre4">
        Make changes to your account here.
      </TabsContent>
    </Tabs>
  )
}

export default DesempenhoGeral
