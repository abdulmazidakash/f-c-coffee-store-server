
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';


function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
     
     <div className='m-20'>
          <button className='text-2xl text-center my-20 text-white btn bg-gradient-to-r from-teal-500 to-blue-600 shadow-lg mx-auto flex'>Coffee store client: {coffees.length}</button>

        <div className='grid md:grid-cols-2 gap-4'>
          {
            coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            ></CoffeeCard>)
          }
        </div>
     </div>

      
    </>
  )
}

export default App
