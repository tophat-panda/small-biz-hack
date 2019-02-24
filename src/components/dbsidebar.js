import React, { Component } from 'react';



class Dbsidebar extends Component {
  render() {
    return (
      <div className="db-sidebar">
        <p>Settings</p>
        <select>
            <option value="ring-1">Traditional Ring</option>
            <option value="option1-mp3">I'm Sexy and I know It</option>
        </select>
        <button>test button 1</button>
        <button>test button 2</button>
        <button>test button 3</button>
        <button>test button 4</button>



      </div>
    );
  }
}

export default Dbsidebar;