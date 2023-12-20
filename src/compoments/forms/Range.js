export function Range({checked, onChange, label, id}){
    
    return<div>
        <input
            id={id}
            className="form-check"
            type="checkbox"
            checked={checked}
            onChange={(e)=>onChange(e.target.checked)}
            
        />
        <label className="form-check-label" htmlFor={id}>{label}</label>
    </div>
}