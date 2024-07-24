export const Notification=({message})=>{
    if(message===null) return null;

    return <div className={`message ${message.isError?"error":"success"}`}>
        <div className="load"></div>
        <span>{message.content}</span>
    </div>
}