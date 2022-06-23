import React from "react";
import Attachment from "./svg/Attachment";

const MessageForm = ({handleSubmit, text, setText, setImg}) => {
    return <form className='message_form' onSubmit={handleSubmit}>
            <label htmlFor='img'>
                <Attachment />
            </label>
            <div>
            <input type="file" id='img' onChange={(e) => setImg(e.target.files[0])}
             accept="image/*" 
             style={{display: "none"}} />
            </div>
            <div>
                <input type="text"
                 placeholder="Enter the message..."
                 value={text}
                 onChange={e=> setText(e.target.value)}
                 />
            </div>
             <div>
                <button className="btn">Send</button>
             </div>

    </form>
}

export default MessageForm;