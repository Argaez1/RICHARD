import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import PostList from './PostList'
import SearchBar from './SearchBar'
import TitleSync from './TitleSync'

const Home = () => {
  const [search, setSearch] = useState('')

  return (
    <div>
      <Card className='p-3 mb-3'>
        <TitleSync />
      </Card>
      <Card className='p-3 mb-3'>
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
        <PostList searchTerm={search} />
      </Card>
    </div>
  )
}

export default Home
