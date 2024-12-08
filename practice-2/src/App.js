import './index.css'
import Article from './Article'
const App = ()=>{
  const articles = [
    {
      title : "React js" , 
      content :"React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "
    },
    {
      title : "Angular js" , 
      content : "AngularJS is a popular open-source framework that simplifies web development by creating interactive single-page applications (SPAs)."
    },
    {
      title : "laravel php",
      content : "Laravel is a web application framework with expressive, elegant syntax. We've already laid the foundation"
    },
    {
      title:"Python",
    }
  ]
  const articleItems = articles.map((article , index) =><Article key={index} title={article.title} content={article.content} />)
  const h1Style = {
    marginBottom : "10px",
    color : "Blue"
  }
  return (
    <>
      <h1 style={h1Style}>Popular languages & frameworks</h1>
      <div className='App'>
          {articleItems}
      </div>
    </>
  )
}

export default App;
