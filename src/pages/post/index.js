import React, {Component} from 'react'
import { connect } from 'react-redux'

import Moment from 'react-moment'
// import Ionicon from 'react-ionicons'
import postList from '../../components/postlist/'

import '../../utils/app.css'
const datePost = new Date(); 

class ForoPage extends Component {
    constructor(props) {
        super(props)
        const { fetchPost } = this.props
        console.log(' :: fetchPost()  :: ', this.props.posts.data)
        fetchPost()
  }

    render () {
        // console.log( ':: CONTENEDOR ::')
        // console.log( this.props )
        const {posts, fetchPost} = this.props
        return(
        <div>
            <section className="section">
                <div className="container">
                    <button onClick={fetchPost} type="button" disabled={posts.fetching}>
                        {posts.fetching ? 'Cargando...' : 'Fetch todos'}
                    </button>

                    <h3>{posts.fetching ? 'Cargando...' : 'Fetch todos'}</h3>

                    
                    <postList data={posts.data} />


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
                                <p className="subtitle"></p>
                                <div className="content" style= {{ display: 'inline-box' }}>
                                    <p>{x.body}</p>
                                </div>
                            </article>

                        </div>
                    </div>
                )}
              
                    
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
export default connect(mapStateToProps, mapDispatchToProps)(ForoPage)