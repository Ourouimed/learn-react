const Article = ({title ="no title", content="no content to show"})=>{
    return (
        <div className="article">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default Article