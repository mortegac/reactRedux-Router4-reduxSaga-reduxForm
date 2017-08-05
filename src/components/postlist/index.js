import React, {Component} from 'react';
  

class postList extends Component {
    render () {
        console.log('this.props: ',this.props) 
        const {data} = this.props
    return (
          
                <ul>
                { data.map(x =>  
            
                    <li key={x.id}>{x.title}</li>
                )}
                </ul>
          
    )
  }
}

export default postList;
