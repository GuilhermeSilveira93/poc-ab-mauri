import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'

const Questions = () => {
  return (
    <Card className="max-w-5xl">
      <CardContent>
        <Accordion type="single" collapsible>
          {questions.map((question) => {
            return (
              <AccordionItem key={question.title} value={question.title}>
                <AccordionTrigger className="font-semibold">
                  {question.title}
                </AccordionTrigger>
                <AccordionContent className="font-semibold">
                  {question.content}
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </CardContent>
    </Card>
  )
}
export default Questions

const questions = [
  {
    title: '1 - Whats is Lorem Ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, tempora error nesciunt enim ipsum sint iste laboriosam nobis, expedita itaque impedit, amet porro consequuntur aut et optio iure dolor provident!',
  },
  {
    title: '2 - Why do we use it?',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium natus facere ex, libero voluptatum suscipit nihil asperiores, dolor aspernatur debitis atque earum recusandae. Autem id necessitatibus voluptatibus? Inventore, perspiciatis architecto.',
  },
  {
    title: '3 - Where does it come from?',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio vel nesciunt iste harum, velit unde quidem mollitia. Rem modi maiores quidem? Laborum, nesciunt doloribus quidem minima pariatur itaque porro mollitia!',
  },
  {
    title: '4 - Where can I get some?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio alias labore delectus quaerat recusandae corrupti eos quos animi culpa dolor. Obcaecati voluptatum corrupti aliquid, omnis error tempore expedita temporibus unde?',
  },
  {
    title: '5 - What is Lorem Ipsum?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi provident quod itaque sapiente deleniti. Molestiae doloremque hic magni delectus eius, similique fugit itaque ab cupiditate recusandae eum, illo corrupti perspiciatis?',
  },
  {
    title: '6 - Why do we use it?',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui repudiandae pariatur commodi! Alias maiores provident numquam reprehenderit deleniti magni nam at eum iusto! Repellendus nemo velit placeat totam facilis. Explicabo.',
  },
  {
    title: '7 - Where does it come from?',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ad, praesentium ullam vitae repellat ut at possimus nemo ab debitis adipisci deserunt! Molestiae nam cumque alias expedita officia enim praesentium.',
  },
  {
    title: '8 - Where can I get some?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laborum. Eius labore suscipit, odio, nisi perferendis placeat alias, magni est distinctio velit itaque at natus consequuntur hic aut repellat impedit.',
  },
  {
    title: '9 - What is Lorem Ipsum?',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, eum unde. Molestiae veritatis cumque in, quasi iste adipisci eius! Est minima similique modi nihil quia officiis officia voluptate molestiae porro.',
  },
  {
    title: '10 - Why do we use it?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloribus unde suscipit explicabo id exercitationem non quia odio voluptate fugiat consequatur facilis, nemo ut sunt possimus perferendis quas nesciunt architecto.',
  },
  {
    title: '11 - Where does it come from?',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, est doloribus neque similique sunt nemo expedita fugiat provident odio molestiae iste eligendi alias corporis culpa repellat. Quaerat, voluptatibus libero. Doloribus.',
  },
  {
    title: '12 - Where can I get some?',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta cupiditate incidunt velit amet exercitationem odio enim quisquam sapiente possimus quae reprehenderit aut saepe placeat eligendi, obcaecati modi quos nisi quaerat!',
  },
]
