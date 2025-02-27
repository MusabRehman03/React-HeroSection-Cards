function Button(props){
    // console.log(text,fn)
    return (
       <button onClick={props.fn} className = {`text-red-500 rounded-lg py-2 px-5 text-xl  " ${props.value}`}
        >
        {props.text}
       </button> 
    )
}
export default Button;