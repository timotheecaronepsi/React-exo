function Button({color, handleClick, children}) {
    return (
    <button className={`btn btn-${color ? color : 'default'}`} onClick={handleClick}>
    {children}
    </button>
    )
   }
   
   export default Button