import TagButton from "./TagButton"
export default function Aside(){
    return (
        <aside> 
            <h1 style={{textAlign : "center"}}>Buttons Navigation</h1>
            <div className={"buttons"}>
                <TagButton tagTitle="Contact Us"/>
                <TagButton tagTitle="About"/>
                <TagButton tagTitle="Dark Mode"/>
                <TagButton tagTitle="Settings"/>
                <TagButton tagTitle="Profile"/>
                <TagButton />
                <TagButton />
                <TagButton />
            </div>
            
        </aside>
    )
}