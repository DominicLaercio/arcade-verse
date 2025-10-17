import ArticleScreen from '../ArticleScreen/ArticleScreen'
import './TestScreen.scss'
//import Article from '../Article/Article'

const TestScreen = () => {
  return (
    /*<div className="testScreen">
        <Article
            articleTitle="Article example"
            mainImageUrl="https://www.incredibuild.com/wp-content/uploads/2021/02/shutterstock_1685146147-scaled-1.jpg"
            authorName="John Doe"
            publishDate="10/17/2025"
        >
            <p>This is the first paragraph of the article.</p>

            <img src="https://miro.medium.com/v2/resize:fit:1400/1*kfU-uEAdlkgy9nOUwYx6Ww.png" alt="Engine Diagram" style={{ width: '50%', margin: '1rem auto', display: 'block' }} />

            <p>A second paragraph. The component can accept multiple paragraphs.</p>

            <ul>
                <li>List item 1</li>
                <li>List item 2</li>
            </ul>
        </Article>
    </div>*/
    <div className='testScreen'>
        <ArticleScreen/>
    </div>
  )
}

export default TestScreen