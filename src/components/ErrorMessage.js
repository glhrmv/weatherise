import React from 'react'

const ErrorMessage = () => (
  <article className="message is-dark">
    <div className="message-body">
      <p>
      Something went wrong with the request. 
      </p>
      <p>
      Please try again later. &nbsp;
      <button
        className="link-button"
        onClick={() => {
          window.location.reload()
        }}
      >
        Try again now?
      </button>
      </p>
    </div>
  </article>
)

export default ErrorMessage
