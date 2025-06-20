import { Route, Routes } from 'react-router-dom'
import { LoginPage, HomePage, ProfilePage } from './routes/routeComponents'

const App = () => {
  return (
    <div className='bg-grey-500'>
      <Routes>
        <Route path='/' Component={LoginPage} />
        <Route path='/login' Component={LoginPage} />
        <Route path='/home' Component={HomePage} />
        <Route path='/profile' Component={ProfilePage} />
      </Routes>
    </div>
  )
}

export default App
