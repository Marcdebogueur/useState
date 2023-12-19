/**
 * 
 * @param {string} placeholder 
 * @param {string} value 
 * @param {(s: string) => void} onChange 
 * @returns 
 */

 function Input1 ({ placeholder, value, onChange}){
    return <div>
        <input 
            type="text"
            className="form-control"
            placeholder={placeholder}
             value={value}
            onChange={(e)=> onChange(e.target.value)}
        />
    </div>
}
 
export default Input1