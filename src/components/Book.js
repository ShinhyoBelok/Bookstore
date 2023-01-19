import React from 'react'

export default function Book(props) {
  const {title, author} = props;
  return (
    <li className="book">
      <section>
        <div>
          <h3>{title}</h3>
          <h4>{author}</h4>
          <button type="submit">Remove</button>
        </div>
      </section>
    </li>
  )
}
