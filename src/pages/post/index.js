import React, {Component} from 'react'
import { connect } from 'react-redux'

// import Moment from 'react-moment'

import Header     from '../../components/header'
import Novedades  from '../../components/novedades/novedades'
import Footer     from '../../components/footer/'

import PostList   from '../../components/postlist'
// import Form from '../../components/form'
import Loading    from '../../components/loading'

import '../../utils/app.css'
// const datePost = new Date(); 

class ForoPage extends Component {
    constructor(props) {
        super(props)
        const fetchPost = this.props.fetchPost
        fetchPost()
  }

  //{ showAdmin && style={{disabled:'disabled'}}}
    render () {
        // console.log( ':: CONTENEDOR POST ::')
        // console.log( this.props )
        const {posts, viewMenu, editPost} = this.props
        return(
        <div>
            <Header />

                <section className="section">
                    <div className="container">

                    <div className="columns">
                        <div className="column">
                            { posts.showAdmin ? 
                                    <p className="title"><strong>Listado de Post</strong></p>
                                    :
                                    <p className="title"><strong>Administrador  de Post</strong></p>
                            }

                        </div>
                        <div className="column is-one-quarter">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a className="button" 
                                        onClick={ (e) => { e.preventDefault() ; viewMenu(false) } }>Post</a> 
                                    <a className="button is-danger"
                                         onClick={ (e) => { e.preventDefault() ; viewMenu(true) } }>Administrar post</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    { posts.fetching && <Loading></Loading>   }
                    
                    

                    
                    <PostList data={posts} editPost={editPost}></PostList>
                        
                    </div>
                </section>
            
            <Novedades></Novedades> 
            <Footer />
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
    viewMenu: (view) => { 
                            dispatch({ type:'MENU_ADMIN', payload: view }) 
                            // console.log("Llamo a viewMenu: ", view) 
                        },
    editPost: (postEdito) => { 
                            dispatch({ type:'EDIT_POST', payload: postEdito }) 
                            console.log("Post A editar: ", postEdito) 
                        },
        
    
    // menuAdmin: () => dispatch({ type: 'MENU_ADMIN' }),
    // menuPost: () => dispatch({ type: 'MENU_POST' }),
    
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