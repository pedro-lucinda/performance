import { FormEvent, useState, memo, useCallback } from 'react'
import { SearchResults } from '../components/SearchResults'
import { api } from '../services/api'

export default function Home() {
  const [query, setQuery] = useState<string>('')
  const [results, setResults] = useState([])

 async function handleSearch(event: FormEvent) {
    event.preventDefault()
    if(query.trim() === '') {
      return;
    }
    const response = await api.get(`/products?q=${query}`)
    setResults(response.data)
}
  // good to use on context
  // memorize functions
  // doesnt let it create new data on memory every re-render
  const addToFavoriteList = useCallback(async(id: number) => {
    console.log(id)
  }, [])

  return (
      <div >
      <h1>Search</h1>
       <form onSubmit={handleSearch}> 
          <input 
            type="text"
            value={query} 
            onChange={(e) => setQuery(e.target.value)} />
          <button>Search</button>
       </form>
       <SearchResults results={results} addToFavoriteList={addToFavoriteList}/>
      </div>
  )
}
