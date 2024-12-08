function TagButton ({tagTitle}){
    if(tagTitle == null || tagTitle ==""){
        return null
    }
    return (
        <button className ={'tag-btn'}>
            {tagTitle}
        </button>
    )
    
}

export default TagButton