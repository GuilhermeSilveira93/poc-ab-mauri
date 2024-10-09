const delay = async (seconds: number) => {
  const time = seconds * 1000 // segundos
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Requisição concluída com sucesso!')
    }, time)
  })
}
export default delay
