import React from 'react'
import { Provider } from 'react-redux'
import { store } from './components/app/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Milk from './components/redux/Milk'
import Egg from './components/redux/Egg'
import Flex from './components/redux/Flex'
import Bread from './components/redux/Bread'
import Muesli from './components/redux/Muesli'
import Oats from './components/redux/Oats'
import Paneer from './components/redux/Paneer'
import Curd from './components/redux/Curd'
import Butter from './components/redux/Butter'
import Cream from './components/redux/Cream'
import Cmilk from './components/redux/Cmilk'
import Vermicell from './components/redux/Vermicell'
import Poha from './components/redux/Poha'
import Pbutter from './components/redux/Pbutter'
import Bars from './components/redux/Bars'
import Lassi from './components/redux/Lassi'
import Breakfast from './components/redux/Breakfast'
import Honey from './components/redux/Honey'
import Batter from './components/redux/Batter'
import Cart from './components/redux/Cart'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Milk}></Route>
          <Route path='/bread' Component={Bread}></Route>
          <Route path='/egg' Component={Egg}></Route>
          <Route path='/flex' Component={Flex}></Route>
          <Route path='/muesli' Component={Muesli}></Route>
          <Route path='/oats' Component={Oats}></Route>
          <Route path='/paneer' Component={Paneer}></Route>
          <Route path='/curd' Component={Curd}></Route>
          <Route path='/butter' Component={Butter}></Route>
          <Route path='/cream' Component={Cream}></Route>
          <Route path='/cmilk' Component={Cmilk}></Route>
          <Route path='/vermicell' Component={Vermicell}></Route>
          <Route path='/poha' Component={Poha}></Route>
          <Route path='/pbutter' Component={Pbutter}></Route>
          <Route path='/bars' Component={Bars}></Route>
          <Route path='/lassi' Component={Lassi}></Route>
          <Route path='/breakfast' Component={Breakfast}></Route>
          <Route path='/honey' Component={Honey}></Route>
          <Route path='/batter' Component={Batter}></Route>
          <Route path='/cart' Component={Cart}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>



  )
}
