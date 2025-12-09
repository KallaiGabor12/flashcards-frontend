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
    {cards.map(card => <FlashCard key={card.id} {...card}/>)}
    </>
  )
}

export default Home