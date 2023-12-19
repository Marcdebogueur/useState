    function Checkbox({checked, onChange, label,id }){
    
       
        return <div class="form-check">
         <input 
            class="form-check-input mx-2" 
            type="checkbox" 
            checked={checked} 
            onChange={(e)=>onChange(e.target.checked)}
            id={id}
        />
         <label class="form-check-label " for={id}>
           n afficher que les produits en stocks         </label>
       </div>
       
}

export default Checkbox;