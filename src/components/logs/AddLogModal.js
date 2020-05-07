import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

import PropTypes from 'prop-types'
import {addLog} from '../../actions/logActions'
import {connect} from 'react-redux'

import TechSelectOptions from '../techs/TechSelectOptions'

const AddLogModal = ({addLog}) => {
    const [msg,setMsg]=useState('');
    const [attn,setAttn]=useState(false);
    const [tech,setTech]=useState('');
    const onSubmit = (e)=>{
        e.preventDefault();
        if(msg===''||tech===''){
            M.toast({html:'Please enter a message and tech'})
        } else {
            const newLog = {
                message:msg,
                attention:attn,
                tech,
            }
            var today = new Date();
            var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear() + ", " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            newLog.date = date
            addLog(newLog);
            M.toast({html:`Log added by ${tech}`})
            setAttn(false);
            setMsg('');
            setTech('');
        }
        
    }
    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter system Log</h4>
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
                            <TechSelectOptions/>
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

AddLogModal.propTypes = {
    addLog:PropTypes.func.isRequired,
}

export default connect(null,{addLog})(AddLogModal)
