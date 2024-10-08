import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'

const RolesInformation = () => {
  return (
    <section className="">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold">
            Confira as regras
          </CardTitle>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="font-bold">Ver regras</Button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl">
              <DialogHeader>
                <DialogTitle className="font-bold">
                  Conheça as regras
                </DialogTitle>
              </DialogHeader>
              <DialogDescription className="h-96 max-w-5xl text-justify">
                <ScrollArea className="h-full text-[1rem]">
                  <div className="space-y-8">
                    <h2 className="text-xl font-bold text-black">
                      What is Lorem Ipsum?
                    </h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                    <h2 className="text-xl font-bold text-black">
                      Where does it come from?
                    </h2>
                    <ul className="ml-4 list-disc">
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Consectetur adipiscing elit</li>
                      <li>Integer molestie lorem at massa</li>
                      <li>Facilisis in pretium nisl aliquet</li>
                      <li>Nulla volutpat aliquam velit</li>
                    </ul>
                    <h2 className="text-xl font-bold text-black">
                      Where does it come from?
                    </h2>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source. Lorem Ipsum
                      comes from sections 1.10.32 and 1.10.33 of de Finibus
                      Bonorum et Malorum (The Extremes of Good and Evil) by
                      Cicero, written in 45 BC. This book is a treatise on the
                      theory of ethics, very popular during the Renaissance. The
                      first line of Lorem Ipsum, Lorem ipsum dolor sit amet..,
                      comes from a line in section 1.10.32.
                    </p>
                    <h2 className="text-xl font-bold text-black">
                      Where does it come from?
                    </h2>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source. Lorem Ipsum
                      comes from sections 1.10.32 and 1.10.33 of de Finibus
                      Bonorum et Malorum (The Extremes of Good and Evil) by
                      Cicero, written in 45 BC. This book is a treatise on the
                      theory of ethics, very popular during the Renaissance. The
                      first line of Lorem Ipsum, Lorem ipsum dolor sit amet..,
                      comes from a line in section 1.10.32.
                    </p>
                  </div>
                </ScrollArea>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </CardHeader>
      </Card>
    </section>
  )
}
export default RolesInformation
