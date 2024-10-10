import Questions from './components/Questions'

const FaqPage = async () => {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold tracking-tight max-sm:text-xl">
          Faq
        </h1>
        <h3 className="text-muted-text max-sm:text-sm">
          Encontre respostas para as perguntas mais frequentes.{' '}
        </h3>
      </div>
      <hr className="w-full" />
      <Questions />
    </div>
  )
}
export default FaqPage
