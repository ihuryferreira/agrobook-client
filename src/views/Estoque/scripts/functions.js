import { useState } from 'react'

// Funçao que guarda dentro do localStorange
export default function addandRemove() {

  const [book, setBook] = useState(() => {
    const storageBook = localStorage.getItem("biblioteca")
    if (!storageBook) return []
    return JSON.parse(storageBook)
  })
  // funçao que adciona o livro dentro de array 
  const addBook = ({ titulo, conver, sinopse, pag, quantidade, idioma, genero, author }) => {
    const id = Math.floor(Math.random() * 100000000)
    const book = { id, titulo, conver, sinopse, pag, quantidade, idioma, genero, author }
    setBook(state => {
      const newstate = [...state, book]
      localStorage.setItem("biblioteca", JSON.stringify(newstate))
      return newstate
    }
    )
  }
  // funçao que remove os livros do array 
  const removeBook = (id) => {
    setBook(state => {
      const newremove = state.filter(books => books.id !== id)
      localStorage.setItem("biblioteca", JSON.stringify(newremove))
      return newremove

    })
  }
  return { addBook, removeBook, book }
}