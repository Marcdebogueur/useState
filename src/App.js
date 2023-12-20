import { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';
import Input1 from './compoments/forms/Input1';
import { Range } from './compoments/forms/Range';
import Checkbox from './compoments/forms/Checkbox';
import { ProduitCategorieRow } from './compoments/forms/products/ProduitCaterogieRow';
import Produitrow from './compoments/forms/products/Produitrow';


const PRODUCTS = [  
    {category: "Fruits", price: 6, stocked: true, name: "Apple"},  
    {category: "Fruits", price: 1, stocked: true, name: "Dragonfruit"},  
    {category: "Fruits", price: 8, stocked: false, name: "Passionfruit"},  
    {category: "Vegetables", price: 2, stocked: true, name: "Spinach"},  
    {category: "Vegetables", price: 4, stocked: false, name: "Pumpkin"},  
    {category: "Vegetables", price: 9, stocked: true, name: "Peas"}  
]


function App() {
  const [showStockedOnly, setShowStockedOnly]=useState(false)
  const [search, setSearch]=useState("");
  const [showRange, setShowRange]=useState(false)
 
  const visibleProducts= PRODUCTS.filter(product=>{
    if(showStockedOnly && !product.stocked){
      return false;
    }
    if(search && !product.name.includes(search)){
      return false
    }
    if(showRange && product.price > 5){
      return false
    }
      return true
    
  })
  return (
    <div className='container my-5'>
      <Searchbar 
        onSearchChange={setSearch}
        showStockedOnly={showStockedOnly} 
        onShowStockedOnlyChange={setShowStockedOnly}
        onShowRangeChange={setShowRange}
        showRange={showRange}/>
      <ProduitTable products={visibleProducts}/>
    </div>

  );
}


function Searchbar({showStockedOnly, onShowStockedOnlyChange, search, onSearchChange,showRange, onShowRangeChange }){
  return <div>
      <div className='mb-4 '>
        <Input1 
          placeholder=" rechercher" 
          value={search} 
          onChange={onSearchChange} />
      </div>
      <div>
        <Checkbox 
          id="stocked" 
          checked={showStockedOnly} 
          onChange={onShowStockedOnlyChange} 
          label="n afficher que les produits en stocks"/>
      </div>
      <div>
        <Range 
          id="range"
          checked={showRange}  
          onChange={onShowRangeChange} 
          label="afficher les produits de moins  de 5$ "/>
      </div>
    </div>
}

function ProduitTable({products}){

  const rows=[]
  let category=null;
  for(let product of products){
    if(category!= product.category){
      rows.push(<ProduitCategorieRow key={product.category} name={product.category} />)
    }
    category=product.category
    rows.push(<Produitrow product={product} key={product.name} />)
  }
  return <table className='table'>
    <thead>
      <tr>
        <td>nom</td>
        <td>prix en $</td>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
}

export default App;
