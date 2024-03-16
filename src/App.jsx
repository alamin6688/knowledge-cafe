import { useState } from 'react'
import './App.css'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Blogs from './Component/Header/Blogs/Blogs'
import Header from './Component/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, time) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // Remove the read blog from the bookmark
    // console.log('remove', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id != id);
    setBookmarks(remainingBookmarks);

  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs 
      handleAddToBookmark={handleAddToBookmark} 
      handleMarkAsRead={handleMarkAsRead}>
      </Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
