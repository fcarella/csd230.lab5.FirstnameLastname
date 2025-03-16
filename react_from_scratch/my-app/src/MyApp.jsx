import { useState } from 'react'
import './App.css'

function MyApp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>
          <a href="/">
            home...
          </a>
        </p>
        <p>
          <a href="/oldIndex">
            old index...
          </a>
        </p>
        <p>
          <a href="/book">
            book...
          </a>
        </p>
        <p>
          <a href="/userDataFetcher">
            user data api call...
          </a>
        </p>
        <p>
          <a href="/bookList">
            book list using axios...
          </a>
        </p>
      </div>
    </>
  )
}

export default MyApp
