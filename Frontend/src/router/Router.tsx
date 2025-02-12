import MainWrapper from '../layouts/MainWrapper'
import { Route, Routes } from 'react-router-dom'
import Core from '../views/core/Core'


function Router() {
  return (
    <MainWrapper>
      <Routes>
        <Route path='/' element={<Core/>}/>
      </Routes>
    </MainWrapper>
  )
}

export default Router