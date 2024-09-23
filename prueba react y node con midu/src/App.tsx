import { useState } from 'react'
import './App.css'

type IdItem =`${string}-${string}-${string}-${string}-${string}`


interface Item {
  id: IdItem
  timestamp: number
  text: string
}

const INITIAL_ITEMS: Item[] = [
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'VideoJuegos'
  },
  {
    id: crypto.randomUUID(),
    timestamp:  Date.now(),
    text: 'Series'
  },
  {
    id: crypto.randomUUID(),
    timestamp:  Date.now(),
    text: 'Libros'
  },
  {
    id: crypto.randomUUID(),
    timestamp:  Date.now(),
    text: 'Peliculas'
  },
  {
    id: crypto.randomUUID(),
    timestamp:  Date.now(),
    text: 'Juegos de mesa'
  }

]


function App() {
  const [ items, setItems] = useState(INITIAL_ITEMS)
 
  const handleSubmit = (event: React.FormEvent<HTMLFormElement> ) =>{
    event.preventDefault()
    const {elements} = event.currentTarget
    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement
    if(!isInput || input == null)return


    const newItem: Item = {
      id:crypto.randomUUID(),
      text: input.value,
      timestamp: Date.now()
    }

    setItems((prevItems) => {
      return [...prevItems,newItem]
    })

    input.value = ''
  }

    const deleteItem = (id:IdItem) => () =>{
      setItems(prevItems =>{
        return prevItems.filter(currentItems => currentItems.id != id )
      })
    }
  return (
    <main>
      <aside>
        <h1>Prueba tecnica de React</h1>
        <h2>Añadir y eleminiar elementos de una lsita</h2>
      <form onSubmit={handleSubmit}>
    <label htmlFor="">
      Elemento a Introducir:
    <input 
    name='item'
    type="text"
    required
placeholder='VideoJuegos'
     />
    </label>
    <button>Añadir elemtneto a la lista</button>
      </form>
      </aside>
    <section>
      <h2>lista de elementos</h2>
 {
  items.length === 0 ? (
    <p>
      <strong>No hay elementos en la lista</strong>
    </p>
  ) : (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.text}
          <button onClick={deleteItem(item.id)}>
            Eliminar Elemento
          </button>
        </li>
      ))}
    </ul>
  )
}

    </section>

    </main>

    
  
  )
}

export default App
