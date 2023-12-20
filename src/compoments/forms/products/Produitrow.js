/**
 * 
 * @param {name:string, price:string, stocked: boolean} product 
 * @returns 
 */


function Produitrow({product}){
    const style= product.stocked? undefined : {color:'red'}
    const style2= (product.price > 5)? undefined : {color:'blue'}
    return <tr>
        <td style={style}>{product.name}</td>
        <td style={style2}>{product.price}</td>
    </tr>
}


export default Produitrow;