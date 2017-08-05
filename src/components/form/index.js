import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Field, reduxForm, change } from 'redux-form'


class frm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Titulo</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-success" type="text" placeholder="Text input" value="Titulo" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Mensaje</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-success" type="text" placeholder="Text input" value="Mensaje" />
                    </div>
                </div>
                <div className="field">
                      <div className="control">
                        <br/>
                        <button className="button is-primary">Submit</button>
                    </div>
                </div>
            </form>
     
      </div>
    )
  }
}

// frm = reduxForm({
//   frm: 'postForm',
// })(frm)


export default frm
