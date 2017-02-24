const React = require('react');

class EasyOnMe extends React.Component{
  constructor(props) {
  super();

  this.focus.bind(this)
  this.blur.bind(this)

}
  focus(){console.log("Good!")};

  blur(){console.log("Hey! Eyes on me!");}

  render(){

    return(
    <div className="EasyOnMe" >
    <button type="password" onFocus={this.focus} onBlur={this.blur} > </button>
    </div>

    )

  }

}

module.exports=EasyOnMe
