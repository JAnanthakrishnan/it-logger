import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js'
import {deleteLog,setCurrent} from '../../actions/logActions'


const LogItem = ({log,deleteLog,setCurrent}) => {
    const onDelete = () =>{
        deleteLog(log.id);
        M.toast({html:'Log Deleted'})
    }
    return (
        <Fragment>
            <li className="collection-item">
                <div>
                    <a href="#edit-log-modal" onClick={()=>setCurrent(log)} className={`modal-trigger ${log.attention?'red-text':'blue-text'}`}>{log.message}</a>
                    <br/>
                    <span className='grey-text'>
                        <span className='black-text'>ID #{log.id }  
                        </span> last updated by
                        <span className='black-text'> {log.tech}
                        </span> on
                        <span className="black-text"> {log.date}
                        </span>
                    </span>
                    <a href="#!" onClick={onDelete} className='secondary-content'>
                        <i className="material-icons grey-text">delete</i>
                    </a>
                </div>
            </li>
        </Fragment>
    )
}
LogItem.propTypes = {
    log:PropTypes.object.isRequired,
    deleteLog:PropTypes.func.isRequired,
    setCurrent:PropTypes.func.isRequired,
}

export default connect(null,{deleteLog,setCurrent})(LogItem)
