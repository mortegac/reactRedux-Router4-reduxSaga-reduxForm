import React, {Component} from 'react'
// import Ionicon from 'react-ionicons'
import Moment from 'react-moment'
// import loading from '../../utils/images/loading2.gif'
import Form from '../form'
const datePost = new Date(); 

class PostList extends Component {
  render () {
       console.log( this.props )
       const {data, editPost, showForm} = this.props
      
    return (
       <div>
        {   data.fetching ? 
                <p>...</p>
                : 
                <div>
                    { data.data.map(x =>  
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
                                        { data.showAdmin ? 
                                            <code>No editable</code>
                                            :
                                            <div>
                                                <a className="button is-primary" onClick={ (e) => { e.preventDefault() ; editPost({...x, showForm:'true'}) } }>Editar</a>
                                                <div className="content" style= {{ display: 'inline-box', backgroundColor:'#fff', padding:'10px 10px', border:'1px solid rgb(191, 188, 188)', borderRadius:'10px', marginTop:'10px'}}>
                                                    {editPost ? <Form data={editPost}></Form> : <p>...</p> }
                                                </div>
                                            </div>

                                        }
                                    </div>
                                    {
                                        //Validar si se edita o no
                                    }
                                   
                                    
                                </article>

                            </div>
                        </div>
                    )}
                </div>
        }
        

      </div>
    )
  }
}

export default PostList;


// <li key={x.id}>{x.title}</li>