//This file is a correction to the Article.js file

// Import Component
import Component from './Component.js';

// Article is a child object of Component
class Article extends Component {

  render () {
    // Return HTML with the title, author, and text of this article
    // Use template literals for the variables
    return (`
      <Article>
        <Title>this.props.title</Title>
        <Author>this.props.author</Author>
        <Text>this.props.text</Text>
      </Article>
    `
    );

  }

}

export default Article;
