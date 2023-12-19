 /**
  * 
  * @param {string} name 
  */
 
 export function ProduitCategorieRow({name}){
    return <tr>
        <td colSpan={2}> <strong>{name}</strong> </td>
    </tr>
 }