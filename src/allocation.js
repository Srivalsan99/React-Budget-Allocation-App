import React from 'react';

function SimpleTable() {
  const [newData, setNewData] = React.useState('');

  function process() {
    var txtVal = document.getElementById('in').value;
    var listNode = document.getElementById('item');
    var liNode = document.createElement('LI');
    var txtNode = document.createTextNode(txtVal);
    liNode.appendChild(txtNode);
    listNode.append(liNode)
    // Do something with the input data
  }

  return (
    <div>
      <form>
        <label>
          Enter your name:
          <input
            type="text"
            id="in"
            value={newData}
            onChange={(e) => setNewData(e.target.value)}
          />
          <button onClick={process}>Enter</button>
        </label>
      </form>
      <ul id="item">

      </ul>
    </div>
  );
}

export default SimpleTable;
