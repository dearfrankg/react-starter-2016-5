import React, {Component} from 'react'

export default class SupportList extends Component {
  render () {
    const features = [
      'hjs-webpack (soon to be renamed briefcase) for simple webpack config',
      'babel with es2015, react, stage-0, react-hmre',
      'fat env variables',
      'PostCSS',
      '.pcss loader for syntax highlighting support in atom',
      'ionicons',
      'webpack resolve: components, containers, store, styles, utils',
      'webpack devServer: serving assets folder which includes ionicons font',
      'testing with Karma, Mocha, Expect, Enzyme',
      'building',
      'linting with Javascript Standard Style'
    ]

    return (
      <ul>
        {features.map((f, i) => {
          return <li key={i} >{f}</li>
        })}
      </ul>
    )
  }
}
