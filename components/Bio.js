import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import profilePic from './div.jpg'

class Bio extends React.Component {
  render () {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`author ${config.authorName}`}
          style={{
            float: 'left',
            marginRight: rhythm(1/4),
            borderRadius: 50,
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        Written by <strong>{config.authorName}</strong> who lives in Dehradun, India building cool things. <a href="https://twitter.com/divyanshu013" target="_blank">You should follow him on Twitter</a>
      </p>
    )
  }
}

export default Bio
