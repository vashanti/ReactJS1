import React from 'react';

function Contact() {
    return (
        <div style={{ backgroundColor: "coral", color: "white" }}>
            <h2>Contact Me</h2>
            <div className='theForm'>
            <form method='post'>
                <div>
                    <div>
                        <input type='text' placeholder='Your Name' />
                    </div>
                    <div>
                        <input type='email' placeholder='Your Email Address' />
                    </div>
                </div>
                <div>
                    <textarea
                        rows={10}
                        name='message'
                        className='form-control formInput'
                        placeholder='Message'
                    ></textarea>
                </div>
                <div>
                    <input type='submit' value='Submit' />
                </div>
            </form>
        </div>
        </div >
     );
}

export default Contact;