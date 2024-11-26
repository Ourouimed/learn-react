export default function Article({title , content , children}){
    return (
        <div className={'article'}>
            <h3>{title}</h3>
            <p>{content}</p>
            {children}
        </div>
    )
}