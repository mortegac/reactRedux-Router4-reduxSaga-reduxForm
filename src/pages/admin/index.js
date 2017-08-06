import React, {Component} from 'react'
import { connect } from 'react-redux'

import Moment from 'react-moment'
// import Ionicon from 'react-ionicons'
import PostList   from '../../components/postlist'
import Frm from '../../components/form'

import '../../utils/app.css'
const datePost = new Date(); 

  

class AdminPage extends Component {
    constructor(props) {
        super(props)
        const { fetchPost } = this.props
        // console.log(' :: fetchPost()  :: ', this.props.posts.data)
        fetchPost()
  }

    render () {
        const {posts, fetchPost} = this.props
        return(
            <div >
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-three-quarters">
                                <div className="columns is-vcentered">
                                    <div className="column"><p className="title"><strong>Administrador de Post</strong></p></div>
                                </div>
                                <PostList data={posts.data}></PostList>

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
