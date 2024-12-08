import Main from './Main'
import Aside from './Aside'
let a = true
function Container (){
    return (
        <div className ={'container'}>
            <Main />
            <CheckSideMenu />
        </div>
    )
}


const CheckSideMenu = ()=>{
    if (a) return <Aside />
    else return null
}
export default Container