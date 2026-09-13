

import { Suspense } from 'react';
import Hero from './components/Hero'
import Nav from './components/Nav'

import type { ITechnologyType } from './types/type';
import Technology from './technologys/Technology';
import Footer from './components/Footer';


function App() {

  const technologiesFetch = async () => {

    const response =  await fetch('../public/technology.json');
    const data = await response.json();
    return data ;
  }

 
  const technologyPromise  : Promise<ITechnologyType[]> = technologiesFetch() ;
  // console.log(technologyPromise);
  
  return (
    <>
     <Nav></Nav>
     <Hero></Hero>
      
      <Suspense fallback = {<h2 className='text-center'> Loading ......</h2>}>
         <Technology technologyPromise  = {technologyPromise}></Technology>
      </Suspense>

      <Footer></Footer>
      

      
    </>
  )
}

export default App
