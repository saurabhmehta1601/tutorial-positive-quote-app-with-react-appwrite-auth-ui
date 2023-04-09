import React from "react"
import positiveQuotes from "../positiveQuotes"

const Quotes = () => {
  return <div className="quote__list">
    {positiveQuotes.map((quote,idx) => <p key={quote.id} className="quote__item">
      {idx+1}. {quote.text}
    </p>)}
  </div>
}

export default Quotes