export function Watch({watches}){
   console.log(watches)
   const {name,price}=watches;
    return (
        <div>
            <h3>Watches:{name}</h3>
            <h4>Price:{price}</h4>
        </div>
    )
}