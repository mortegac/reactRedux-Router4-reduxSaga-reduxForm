import React, {Component} from 'react';
import Frm from '../../components/form/'

import { connect } from 'react-redux'

import Moment from 'react-moment'
import postList from '../../components/postlist/'

import '../../utils/app.css'
const datePost = new Date(); 

  

class AdminPage extends Component {
   constructor(props) {
        super(props)
        const { fetchPost } = this.props
        fetchPost()
  }

    render () {
        // console.log( ':: CONTENEDOR ::')
        // console.log( this.props )
        const {posts, fetchPost} = this.props
        return(
            <div >
                <section className="section">
                    <div className="container">
                         <div className="tabs is-centered  is-small">
                          ADMINISTRACION
                        </div>
                        <div className="columns">
                            <div className="column is-three-quarters">
                                { posts.data.map(x => 
                                    <div className="columns" key={x.id}>
                                        <div className="column">

                                            <article className="tile is-child notification is-warning">
                                                <p className="title" style={{color: 'rgba(0,0,0,0.8)'}}>{x.title}</p>
                                                <hr style={{ borderTopColor:'rgba(0,0,0,0.29)', margin: '5px 0' }} />
                                                
                                                    <ul style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px'}}>
                                                        <li>Fecha:  
                                                        { 
                                                            (x.date) ? 
                                                                x.date
                                                                :
                                                                <Moment format="DD - MM - YYYY  HH:mm">{{datePost}}</Moment>
                                                        }
                                                    </li>
                                                        <li>Usuario: { 
                                                            (x.user) ? 
                                                                x.user
                                                                :
                                                                'Anonimo'
                                                        }</li>
                                                    </ul>
                                                {
                                                    <div className="field">
                                                        <div className="control">
                                                        <br/>
                                                            <button className="button is-primary">Editar Post</button>
                                                        </div>
                                                    </div>
                                                //     <p className="subtitle"></p>
                                                // <div className="content" style= {{ display: 'inline-box' }}>
                                                //     <p>{x.body}</p>
                                                // </div>
                                                }
                                            </article>

                                        </div>
                                    </div>
                                )}

                            </div>
                            <div className="column">
                                <Frm></Frm>
                            </div>

                        </div>  
                        
                    
                    </div>
                </section>
            </div>
    )
  }
}



const mapStateToProps = state => {
    // console.log(state)
  return {
    ...state,
  }
}

const mapDispatchToProps = dispatch => ({
    fetchPost: () => dispatch({ type: 'FETCH_POST' }),
//     fetchPost: () => { 
//             console.log(' :: dispatch: type: FETCH_POST  :: ')
//             dispatch({ type: 'FETCH_POST' })
//   },

//   submit: payload => dispatch({ type: 'ADD_UNIVERSIDAD', payload: { ...payload, id: getId(), edit: false } }),
//   update: (payload, id) => {

//     dispatch({ type: 'EDIT_UNIVERSIDAD', payload: { ...payload, id } })
//   }
})
export default connect(mapStateToProps, mapDispatchToProps)(AdminPage)
