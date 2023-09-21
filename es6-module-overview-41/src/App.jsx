
import { useEffect, useState } from 'react'
import './App.css'
import { Watch } from './component/watch/watch'

function App() {
  // const watch = [
  //   { id: 1, name: 'Seiko SKX007', price: 250 },
  //   { id: 2, name: 'Casio G-Shock DW5600', price: 100 },
  //   { id: 3, name: 'Rolex Submariner', price: 10000 },
  //   { id: 4, name: 'Timex Weekender', price: 40 },
  //   { id: 5, name: 'Fossil Grant', price: 120 },
  // ];
 const [watch,setWatch]=useState([])
//  useEffect(()=>{
//   fetch('watches.json')
//   .then(res=>res.json())
//   .then(data=>setWatch(data))
//  },[])
useEffect(()=>{
  fetch('https://raw.githubusercontent.com/antubhatta/watches-data/main/watched.json')
  .then(res=>res.json())
  .then(data=>setWatch(data))
 },[])
// const watch=[
//   {
//     "id": 1,
//     "name": "Luxury Chronograph",
//     "price": 1500.00
//   },
//   {
//     "id": 2,
//     "name": "Sporty Diver",
//     "price": 750.00
//   },
//   {
//     "id": 3,
//     "name": "Classic Leather",
//     "price": 400.00
//   },
//   {
//     "id": 4,
//     "name": "Elegant Rose Gold",
//     "price": 1200.00
//   },
//   {
//     "id": 5,
//     "name": "Digital Fitness Tracker",
//     "price": 100.00
//   },
//   {
//     "id": 6,
//     "name": "Vintage Pocket Watch",
//     "price": 600.00
//   },
//   {
//     "id": 7,
//     "name": "Minimalist Steel",
//     "price": 300.00
//   },
//   {
//     "id": 8,
//     "name": "Smartwatch Pro",
//     "price": 800.00
//   },
//   {
//     "id": 9,
//     "name": "Designer Fashion Watch",
//     "price": 550.00
//   },
//   {
//     "id": 10,
//     "name": "Aviator's Pilot Watch",
//     "price": 950.00
//   }
// ]

  return (
    <>
      <h2>Vite + React</h2>
      
    {
      watch.map(watch=><Watch key={watch.id} watches={watch}></Watch>)
    }
    </>
  )
}

export default App
