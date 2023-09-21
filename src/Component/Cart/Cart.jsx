
const Cart = ({cart,idx}) => {
    const {title}=cart;
    return (
        <div>
            <h3 className="text-base font-normal text-[#1C1B1B99]">{idx+1} {title}</h3>
        </div>
    );
};

export default Cart;