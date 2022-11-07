import React from 'react'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
const Quote = () => {
  return (
    <div id='quote-box'>
        <div id='text'>
        
            

        </div>
        <div id ='author'>

        </div>
        <button id = "new-quote">
            New quote
        </button>
        <a type="button" role="button" title="Share on twitter" id="tweet-quote"
   href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fparse.com"
   rel="noopener"><FontAwesomeIcon icon = {faFacebookF}></FontAwesomeIcon>
  
</a>


        
    </div>
  )
}

export default Quote