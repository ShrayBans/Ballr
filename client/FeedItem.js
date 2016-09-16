const React = require('react');

// FeedItem should consist of an image (src contained in the data from the AJAX request)
const FeedItem = React.createClass({
  render() {
    // console.log(this.props.housePrice)
    // put render logic here
    return (
      <div styles={styles.container}>
        Blah
        {this.props.housePrice}
      </div>
    );
  },
});

const styles = {
  container: {
    border: '1px solid black',
    height: 100,
    width: '100%',
    flex: 1,
  },
};

module.exports = FeedItem;
