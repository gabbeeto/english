import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Main from './main/Main'
import './index.css'

const rootElement = document.getElementById('root')!
const root = ReactDOM.createRoot(rootElement)

root.render(<>
<Header />
<Main />
</>
)
