import Article from './Article' 
let Lis = ["Mohamed" , "Issam" , "Adam"]
function Main (){
   
    return (
        <main>
            <Article title="What is React js" content="React is a Js framework">
                <h1>React js</h1>
                <span>Founded in 2015</span>
                <button>Click here for more</button>
            </Article>
            <Article title="What is laravel" content="Laravel is a php framework">
                <input type="text" placeholder="your text here"></input>
                <button >Send</button>
            </Article>
            <Article title="What is Nodejs" content="bode Js is a Js framework">
                <p>Learn more about <a href="">laravel</a></p>
            </Article>
            <Article title="HTML is not a programing language" content="HTML is a Markup language">
                <table>
                    <thead>
                        <td>Languages</td>
                        <td>Js</td>
                        <td>Php</td>
                        <td>Python</td>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Framworks</td>
                            <td>React , node , next , Angular ..</td>
                            <td>Laravel</td>
                            <td>flask</td>
                        </tr>
                    </tbody>
                </table>
            </Article>
        </main>
    )
}


export default Main