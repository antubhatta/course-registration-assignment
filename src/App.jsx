import './App.css'
import Header from './Component/Header/Header'
import Courses from './Component/Courses/Courses'
import Carts from './Component/Carts/Carts'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [selectCourse,setSelectCourse]=useState([])
  const [courseCredit,setCourseCredit]=useState(0)
  const [totalPrice,setTotalPrice]=useState(0)
  const [remaining,setRemaining]=useState(20)

  const handleSelectCourse=(course,price)=>{
    const isExits=selectCourse.find(item=>item.id===course.id)
    let count=course.credit
    if(isExits){
      toast('This course is already added')
    }
    else{
      selectCourse.forEach((item)=>{
          count=count+item.credit
        })
      
      setTotalPrice(totalPrice+price)
      const totalRemaining=20-count

      if(count>20 || count<0){
       return toast('The limitation is over')
      }
      
      setCourseCredit(count)
      setRemaining(totalRemaining)
      setSelectCourse([...selectCourse,course])
    }
    
  }
  return (
    <div className='container mx-auto'>
      <Header></Header>
     <div className='lg:flex justify-between lg:gap-6'>
     <Courses handleSelectCourse={handleSelectCourse}></Courses>
     <Carts selectCourse={selectCourse} courseCredit={courseCredit} totalPrice={totalPrice} remaining={remaining}></Carts>
     </div>
     <Toaster
  toastOptions={{
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: 'white',
      borderRadius:'8px',
      background:'tomato'
    },
  }}
/>
    </div>
  )
}

export default App
