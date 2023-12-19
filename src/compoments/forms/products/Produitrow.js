/**
 * 
 * @param {name:string, price:string, stocked: boolean} product 
 * @returns 
 */


function Produitrow({product}){
    const style= product.stocked? undefined : {color:'red'}
    return <tr>
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}


export default Produitrow;