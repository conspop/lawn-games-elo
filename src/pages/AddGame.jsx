import React, { useState } from 'react'
import DateTime from 'react-datetime'
import "react-datetime/css/react-datetime.css";
import moment from 'moment'
import axios from 'axios'

export default function AddGame() {
  const [winner, setWinner] = useState('')
  const [loser, setLoser] = useState('')
  const [date, setDate] = useState(moment(new Date()))
  const [location, setLocation] = useState('')

  async function handleSubmit() {
    await axios.post('/api/games/add', {
      winner,
      loser,
      date,
      location
    })
  }

  return (
    <>
      <div>
        Winner:
        <input onChange={event => setWinner(event.target.value)} />
      </div>
      <div>
        Loser:
        <input onChange={event => setLoser(event.target.value)}/>
      </div>
      <div>
        Date:
        <DateTime
          initialValue={new Date()}
          value={date} 
          onChange={date => setDate(moment(date))}
        />
      </div>
      <div>
        Location:
        <input onChange={event => setLocation(event.target.value)}/>
      </div>
      <button onClick={handleSubmit}>Add</button>
    </>
  )
}