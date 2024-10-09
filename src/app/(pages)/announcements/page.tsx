import Image from 'next/image'

const AnnouncementsPage = async () => {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold tracking-tight max-sm:text-xl">
          Comunicados
        </h1>
        <h3 className="text-muted-text max-sm:text-sm">
          Conheça os comunicados mais recentes
        </h3>
      </div>
      <hr className="w-full" />
      <div className="flex flex-col items-center">
        <Image
          alt="noContent"
          style={{ objectFit: 'contain' }}
          src="https://poc-abb.vercel.app/_next/image?url=%2Fempty-state.png&w=640&q=75"
          width={400}
          height={400}
        />
        <h2 className="text-3xl font-bold">Nenhum comunicado encontrado</h2>
      </div>
    </div>
  )
}
export default AnnouncementsPage
