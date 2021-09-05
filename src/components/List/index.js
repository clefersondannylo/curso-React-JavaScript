import { useEffect, useState, useCallback, useMemo } from 'react'

const set = new Set()

export default function List(props) {
  const [counter, setCounter] = useState(0)
  const number = useMemo(() => {
    return 4245454564454545454454 * 45646545455645596897454564
  }, []) //Use o useMemo para cálculos pesados ou para repassar a variável através das props....Retorna uma variável.
  const handleSetCounter = useCallback(() => {
    setCounter(preventCounter => (preventCounter += 1)) //passo uma função anônima para pegar o valor atual e aumentar desse valor.
    set.add(handleSetCounter)
  }, []) //Posso usá-lo para evitar renderizações desnecessárias, fazendo com que realmente a mesma função seja executada a cada clique.
  //Usada para passar nossa função para outros componentes (via props)....retorna função.

  console.log(set.size)
  useEffect(() => {
    return () => {} //Apesar de usar o return para o trecho de código ser executado apenas na hora que o componente for desmontado, por conta da atribuição de valor da variável que está no array, ele será executado bem antes do horário "previsto".
  }, [counter])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {counter}

      <button style={{ margin: '1rem' }} onClick={handleSetCounter}>
        Clique
      </button>
    </div>
  )
}
