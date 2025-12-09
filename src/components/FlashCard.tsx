import React, { useState } from 'react'
import styles from "./FlashCard.module.css"

const FlashCard = () => {
    const [flipped, setFlipped] = useState(false)

  return (
    <div className={styles.flipCard} onClick={()=>setFlipped(true)}>

        <div className={styles.flipCardInner} style={{
    transform: `rotateY(${flipped ? 180 : 0}deg)`
  }}>
    <div className={styles.flipCardFront}>
        <h2>Mikor van a mikulás</h2>
    </div>
    <div className={styles.flipCardBack}>
        <header>5</header>
        <h2>Answer</h2>
        <div>
            <button>
                <i className="fa-regular fa-circle-check"></i>
            </button>
            <button>
                <i className="fa-regular fa-circle-xmark"></i>
            </button>
        </div>
    </div>
  </div>
</div>
  )
}

export default FlashCard