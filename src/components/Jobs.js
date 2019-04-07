import React, {Component} from 'react';

class Jobs extends Component {
    render(){
        return(
            <div className={this.props.cssName}>
                <h3>{this.props.position}</h3>
                <h4>{this.props.year}</h4>
                <p>
                    {this.props.jobDesc}
                </p>
            </div>
        )
    }
    
}

export default Jobs;