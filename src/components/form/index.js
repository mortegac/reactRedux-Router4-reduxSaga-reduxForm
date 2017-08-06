import React, { Component } from 'react'
// import { connect } from 'react-redux'
//import { Field, reduxForm, change } from 'redux-form'
import { reduxForm } from 'redux-form'
import './form.css'

class frm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Titulo</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-success" type="text" placeholder="Titulos del Post" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Mensaje</label>
                    <div className="control has-icons-left has-icons-right">
                        <textarea className="textarea is-primary" type="text" placeholder="Detalle del Post"></textarea>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <div className="field is-grouped">
                            <p className="control">
                                <a className="button is-primary" style={{ marginRight:'5px'}}>Grabar</a>
                                <a className="button is-warning" style={{ marginRight:'5px'}}>Eliminar</a>
                                <a className="button">Cerrar</a>
                            </p>
                        </div>
                        
                    </div>
                </div>
            </form>
            <br/>     
      </div>
    )
  }
}

frm = reduxForm({
  form: 'formulario'
})(frm)

export default frm
