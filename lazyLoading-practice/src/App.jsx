import { Suspense } from 'react'
import React from 'react'
import './App.css'
const LazyLoading=React.lazy(()=>import('./LazyLoading'))
// import LazyLoading from './LazyLoading'
function App() {
  return (
    <>
    <div>
      <h1>Lazy Loading Practice</h1>
    </div>
    <Suspense fallback={"loading...."}>
     <LazyLoading/>
    </Suspense>
    </>
  )
}

export default App
