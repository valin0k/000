import React from 'react'
import Article from './Article'

export default ({articles}) =>
  <ul>
    {articles.map(article => <li key={article.id}><Article article={article} /></li>)}
  </ul>
