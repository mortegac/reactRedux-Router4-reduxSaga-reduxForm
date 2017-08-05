import React, {Component} from 'react'
import Ionicon from 'react-ionicons'
import Moment from 'react-moment'
import loading from '../../utils/images/loading2.gif'
const datePost = new Date(); 

class PostList extends Component {
  render () {
       console.log( this.props )
       const {data} = this.props
    return (
       <div>
        <div className="columns is-vcentered">
            <div className="column">
                <p className="title"><strong>Listado de Post</strong></p>
            </div>
        </div>
       
        {   data.fetching ? 
                <img src={loading} alt="Loading"  style={{width:'210px', height:'210px'}}/>
                : 
                <div>
                    { data.map(x =>  
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
        }
        

      </div>
    )
  }
}

export default PostList;


// <li key={x.id}>{x.title}</li>