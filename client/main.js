const React = require('react');
const ReactDOM = require('react-dom');
const Feed = require('./Feed');


// App consists of one feed
const App = React.createClass({
  render() {
    return (
      <div styles={styles.container}>
        <Feed/>
      </div>
    );
  },
});

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }
};

// Render an <App> component to the #app div in the body
ReactDOM.render(<App />, document.getElementById('app'));
