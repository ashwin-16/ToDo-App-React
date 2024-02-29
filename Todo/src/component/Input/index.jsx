import './input.css'
const Input=({type,placeholder,onChange, onkeyDown ,value})=>{
    return <>
    <div className="inp">
    <input className="input" type={type} placeholder={placeholder} onChange={onChange} value={value} onKeyDown={onkeyDown} />
    </div>
    </>
}

export default Input;