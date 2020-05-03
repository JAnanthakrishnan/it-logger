import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const EditLogModal = () => {
    const [msg,setMsg]=useState('');
    const [attn,setAttn]=useState(false);
    const [tech,setTech]=useState('');
    const onSubmit = (e)=>{
        e.preventDefault();
        if(msg===''||tech===''){
            M.toast({html:'Please enter a message and tech'})
        } else {
            console.log(msg,attn,tech);
            //Clear Fields
            setAttn(false);
            setMsg('');
            setTech('');
        }
        
    }
    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Edit system Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='msg' value={msg} onChange={e=>setMsg(e.target.value)}/>
                        <label htmlFor="msg" className="active">
                            Log Message
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} className='browser-default' onChange={e=>setTech(e.target.value)}>
                            <option value="" disabled>
                                Select Technician
                            </option>
                            <option value="John Smith">
                                John Smith
                            </option>
                            <option value="Sam Doe">
                                Sam Doe
                            </option>
                            <option value="Mary Jane">
                                Mary Jane
                            </option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" checked={attn} value={attn} onChange={e=>setAttn(!attn)}/>
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn" style={{marginRight:'10px'}}>Enter</a>
            </div>
        </div>
    )
}
const modalStyle = {
    width:'75%',
    height:'75%'
}

export default EditLogModal
