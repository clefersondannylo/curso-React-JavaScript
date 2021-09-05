import { useEffect, useState } from 'react'

export default function List() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    return () => {
      console.log('atualizou')
    } //Apesar de usar o return para o trecho de código ser executado apenas na hora que o componente for desmontado, por conta da atribuição de valor da variável que está no array, ele será executado bem antes do horário "previsto".
  }, [counter])

  // useEffect(() => {
  //   return () => {
  //     console.log('Desmontado')
  //   }
  // }, [])
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {counter}
      <button
        style={{ margin: '1rem' }}
        onClick={() => setCounter(preventCounter => preventCounter + 1)} //passo uma função anônima para pegar o valor atual e aumentar desse valor.
      >
        Clique
      </button>
    </div>
  )
}
