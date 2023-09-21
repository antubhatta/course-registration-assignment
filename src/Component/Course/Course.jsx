
import dollar from '../../assets/images/dollar-sign 1.svg'
import book from '../../assets/images/Frame.svg'

const Course = ({course,handleSelectCourse}) => {
    const {image,title,description,price,credit}=course;

    return (
        <div className="bg-[#FFF] rounded-xl">
            <div className="p-4">
                <img className="h-[144px] w-full rounded-lg" src={image} alt="" />
            </div>
            <h2 className="text-[#1C1B1B] text-lg font-semibold mb-1 pl-4">{title}</h2>
            <p className="text-[#1C1B1B99] text-sm font-normal ml-4 mr-4 mb-4">{description}</p>
            <div className="flex items-center justify-between gap-4 ml-4 mr-4 mb-6">
                <div className='flex items-center gap-2'>
                    <img src={dollar} alt="" />
                    <p className='text-[#1C1B1B99] text-base font-medium'>Price: {price}</p>
                </div>
                <div className='flex items-center gap-2'>
                <img src={book} alt="" />
                    <p className='text-[#1C1B1B99] text-base font-medium'>Credit: {credit} hr</p>
                </div>

            </div>
            <div className='flex justify-center mx-4 mb-4 bg-[#2F80ED] rounded-lg'>
           <button onClick={()=>handleSelectCourse(course,price)} className='text-[#FFF] lg:px-36 py-2 text-lg font-semibold'>Select</button>
           </div>
           
        </div>
    );
};

export default Course;