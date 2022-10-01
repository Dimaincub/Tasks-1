import React, { useState } from 'react'
import Counter from './counter'

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: 'Ненужная вещь' },
    { id: 1, value: 0, name: 'Ложка' },
    { id: 2, value: 0, name: 'Вилка' },
    { id: 3, value: 0, name: 'Тарелка' },
    { id: 4, value: 0, name: 'Нож' },
  ]

  const [counters, setCounters] = useState(initialState)

  const hendleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id)
    setCounters(newCounters)
  }

  const hendleReset = () => {
    setCounters(initialState)
  }

  const hendleIncrement = (id) => {
    const newIncrement = counters.map((counter) => ({
      ...counter,
      value: id === counter.id ? counter.value + 1 : counter.value,
    }))
    setCounters(newIncrement)
  }

  const hendleDecrement = (id) => {
    const newIncrement = counters.map((counter) => ({
      ...counter,
      value:
        id === counter.id && counter.value > 0
          ? counter.value - 1
          : counter.value,
    }))
    setCounters(newIncrement)
  }

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={hendleDelete}
          onIncrement={hendleIncrement}
          onDecrement={hendleDecrement}
          {...count}
        />
      ))}

      <button className="btn btn-primary btn-sm m-2" onClick={hendleReset}>
        Сброс
      </button>
    </>
  )
}

export default CountersList
