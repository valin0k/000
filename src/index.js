import React, {Component} from 'react'
import {render} from 'react-dom'
import Articles from './components/ArticleList'
import {articles} from './fixtures'

render(<Articles articles={articles} />, document.getElementById('container'))
