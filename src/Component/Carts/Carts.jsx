import Cart from "../Cart/Cart";
const Carts = ({selectCourse,courseCredit,totalPrice,remaining}) => {
    return (
        <div className="lg:w-1/4 mx-6 mb-4 lg:mb-0 lg:mx-0">
            <div className=" bg-[#FFF] rounded-xl pl-6 pr-6">
            <h2 className="text-lg text-[#2F80ED] pt-6 font-bold">Credit Hour Remaining: {remaining} hr</h2>
            <div className="border-b border-[#11111126] mt-4 mb-4"></div>
            <h3 className="text-[#1C1B1B] text-xl font-bold mb-4">Course Name</h3>
            {
                selectCourse.map((carts,idx)=><Cart key={idx} idx={idx} cart={carts}></Cart>)
            }
            <div className="border-b border-[#11111126] mt-4 mb-4"></div>
            <h3 className="text-[#1C1B1B] text-base font-medium mb-4">Total Credit Hour : {courseCredit}</h3>
            <div className="border-b border-[#11111126] mt-4 mb-4"></div>
            <h3 className="text-[#1C1B1B] text-base font-semibold pb-4">Total Price : {totalPrice} USD</h3>

        </div>
        </div>
    );
};

export default Carts;