
import React from 'react';
import PropTypes from 'prop-types';


const Article = ({ title, author, description  }) => (
  <> 
    <h1>{title}</h1>
      
    (<h3>By {author}</h3>)
     
    (<h3>{description}</h3>)
      
  </>
);

Article.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string
};

export default Article;
