function ConfirmButton({message,children}){
    return(
        <button type="button" onClick={()=>alert(message)}>
           {children}
        </button>
    )



}

export default ConfirmButton