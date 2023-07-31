import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ErrorHandler from '../Pages/ErrorHandler';
import Home from '../Pages/Home';
import Bollywood from '../Pages/Bollywood';
import Hollywood from '../Pages/Hollywood';
import Technology from '../Pages/Technology';
import Fitness from '../Pages/Fitness';
import Food from '../Pages/Food';
import SingleArtical from './GenericComonents/SingleArtical';
const RoutesFile=()=>{
return(
    <>
    
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Bollywood' element={<Bollywood initialIds={1} name={'Bollywood'}/>}></Route>
        <Route path='/Hollywood' element={<Hollywood initialIds={16} name={'Hollywood'}/>}></Route>
        <Route path='/Technology' element={<Technology initialIds={31} name={'Technology'}/>}></Route>
        <Route path='/Fitness' element={<Fitness initialIds={46} name={'Fitness'}/>}></Route>
        <Route path='/Food' element={<Food initialIds={61} name={'Food'}/>}></Route>
        {/* dynamic routing to singleArical page */}
        <Route path='/:NewsId' element={<SingleArtical/>}></Route>
        <Route path='/Bollywood/:NewsId' element={<SingleArtical/>}></Route>
        <Route path='/Hollywood/:NewsId' element={<SingleArtical/>}></Route>
        <Route path='/Technology/:NewsId' element={<SingleArtical/>}></Route>
        <Route path='/Fitness/:NewsId' element={<SingleArtical/>}></Route>
        <Route path='/Food/:NewsId' element={<SingleArtical/>}></Route>

        {/* error handler page */}
        <Route path='*' element={<ErrorHandler/>}></Route>
    </Routes>
    </>
);
}
export default RoutesFile;