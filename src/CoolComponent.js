export default coolComponent = ({text = "default text. you can give the 'text' parameter a value"}) => {
    return <div style={{color: "blue", fontWeight: "bold"}}>{text}</div>
}