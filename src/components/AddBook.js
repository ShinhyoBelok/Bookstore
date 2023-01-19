import React from 'react'

export default function AddBook() {
  return (
    <section>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" placeholder="Book title"/>
        <input type="text" placeholder="Author"/>
        <input type="submit" value="ADD BOOK" />
      </form>
    </section>
  )
}
