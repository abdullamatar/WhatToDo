import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

ReactDOM.render(<App />, document.getElementById('root'))
function imReallyJustRushingThis(){
    var a = document.getElementById("age").value;
    var e = document.getElementById("expected").value;
    var daysLeft = 0;
    a *= 365; e*=365;
    daysLeft = e-a;
    document.getElementById("output").innerHTML = `Fortunately you've got around ${daysLeft} days left, what are you gonna do next?`;
}
imReallyJustRushingThis();