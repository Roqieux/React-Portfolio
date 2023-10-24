import {useState} from 'react';

export default function Email(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [help, setHelp] = useState('')

    const validate = (e) => {
      e.preventDefault();
      if (!name || !email || !message) {
       setHelp( "All fields are required.")
      } else if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        setHelp("Invalid email.")
      } else {
        location.reload()
      }
    };

    const warning = (e) => {
      e.stopPropagation();
      if (!e.target.value) {
        setHelp(`${e.target.id} is required. `)
      } else if (
        e.target.id === "Email" &&
        !e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ) {
        setHelp("Invalid email.")
      }
    };

    return (
        <form className='p-5 col-6'style={{border: "2px solid gray"}}>
            <label className="form-label" htmlFor="name">Name:</label>
            <input className="form-control" id="Name" type="text" value={name} onChange={e => setName(e.target.value)} onBlur={warning} />
            <div id="nameHelp" className="form-text"> </div>
            <label className="form-label" htmlFor="email">Email: </label>
            <input className="form-control" id="Email" type="email"value={email} onChange={e => setEmail(e.target.value)} onBlur={warning}/>
            <div id="emailHelp" className="form-text"> </div>
            <label className="form-label" htmlFor="message">Message:</label>
            <textarea className="form-control"  id="Message" value={message} onChange={e => setMessage(e.target.value)} onBlur={warning}/>
            <div id="help" className="form-text"> {help} </div>
            
            <button type='submit' className="btn btn-primary mt-3" onClick={validate}>Send</button>
        </form>
    )
}