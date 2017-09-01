import React from 'react'

const ErrorMessage = () => (
  <article className="message is-dark">
    <div className="message-body">
      Something went wrong with the request. Please try again later. &nbsp;
      <a
        onClick={() => {
          window.location.reload()
        }}
      >
        Try again now?
      </a>
    </div>
  </article>
)

export default ErrorMessage
