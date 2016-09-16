const React = require('react');
const FeedItem = require('./FeedItem');
const rp = require('request-promise');

var options = {
        uri: 'http://localhost:3000/json', //CHANGE THIS TO SOMETHING NORMAL
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true 
};


// Feed contains multiple FeedItems
// Put AJAX in this Component
const Feed = React.createClass({
  getInitialState() {
    return {
      parameters: {zpid:  234982},
      urls: {id:0},
      arr: {name: 'shray', zindex: 500}
    };
  },
   componentDidMount() {
    this.callItems();
  },

  handleChange(data){
    console.log('sup')
     this.setState(data)
  },


  callItems(){
    rp(options)
        .then(function (result) {
            var tempObj = {};
            var newArr = [];
            for(var prop of result.list.region){
              if(prop.zindex){
                  tempObj['name'] = prop.name[0];
                  tempObj['zindex'] = prop.zindex[0]._;
                  newArr.push(tempObj)
                }
            }
            var obj = {arr: newArr}
            // console.log(obj)
            this.handleChange(obj).bind(this)
        })
  },
  render() {
    // put render logic here
    //apply many feedItems (LOOP)
    return (
      <div styles={styles.container}>
      
        <FeedItem />
      </div>
    );
  },
});

const styles = {
  container: {
    border: '1px black solid',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  },
};

module.exports = Feed;
