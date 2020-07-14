import React from 'react';

const greetings = {
  morning: "Good Morning",
  noon: 'Good Afternoon',
  evening: 'Good Evening',
  night: 'Good Night'
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      greeting: greetings.morning
    }
    this.startTime = this.startTime.bind(this);
  }

  componentDidMount() {
    this.startTime();
  }

  startTime() {
    let today = new Date();
    let h = today.getHours();
    let greeting;
    if (h > 6 && h < 12) {
      greeting = greetings.morning;
    } else if (h >= 12 && h < 17) {
      greeting = greetings.noon;
    } else if (h >= 17 && h < 20) {
      greeting = greetings.evening;
    } else {
      greeting = greetings.night;
    }

    this.setState({greeting});
    setTimeout(this.startTime, 1000);
  }

  render() {
    return (
      <div className="App">
        <h1>
          {this.state.greeting}
          <br />
          <div className="Sample">Abhinav</div>
          <div className="Sample2">Enjoy your time.</div>
          </h1>
      </div>
    );
  }
}

export default App;