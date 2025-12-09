import React, { useEffect, useState } from 'react'
import FlashCard from '../components/FlashCard'
import axios from 'axios'

export type FlashCardType = {
  id: number,
  question: string,
  answer: string,
  points: number
}

const Home = () => {
  const [cards, setCards] = useState<FlashCardType[]>([])

  useEffect(()=>{
    axios.get("cards.json")
    .then(response => setCards(response.data))
  }, [])
  return (
    <>
    {cards.length > 0 &&<FlashCard key={cards[0].id} {...cards[4]}/>}
    </>
  )
}

export default Home