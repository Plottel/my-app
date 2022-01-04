import React from 'react';
import ReactDOM from 'react-dom';

class ReactTestApp extends React.Component {
  constructor(props) {
		super(props);
		this.state = 
		{
			clickCount: 0
		};
	}

  render() {
    return (
      <div>
      	<MessageClickButton message={"Hello World: " + this.state.clickCount} onClick={this.OnTestButtonClicked}/>
      	<MessageClickButton message={"Reset"} onClick={this.Reset}/>
      </div>
    );
  }

  Reset = () =>
  {
  	this.setState({clickCount:0})
  }

  OnTestButtonClicked = () =>
  {
  	this.setState({clickCount: this.state.clickCount + 1})
  }
}

function MessageClickButton(props) {
	return (
			<button onClick={props.onClick}>
				{props.message}
			</button>
		);
}


// Main

ReactDOM.render(
  <ReactTestApp/>,
  document.getElementById('root')
);


