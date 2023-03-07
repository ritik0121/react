/*
This code creates a div with a background color that is either white or black depending on the value of the variable "isActive". Inside the div, there is a textarea with 3 rows and two buttons. The first button, when clicked, will change the case of the words entered in the textarea. The second button, when clicked, will change the background color of the div. Lastly, there is a paragraph that displays whatever words are entered in the textarea.
*/
<div style={{backgroundColor:isActive?'black':'white',alignItems:'center',justifyContent:'center'}}>

<textarea style={{width:500,margin:30,marginLeft:150,backgroundColor:'red',color:'white'
}} rows={3} value={words} onChange={handleChange}>
</textarea>
<button onClick={changeCase}>CLick me to {num} change</button>
<br />
<br />
<button onClick={BGC}>Change BGC</button>
<br />
<br />
<button onClick={count}>Count Length {num}</button>
<p>{num}</p>
</div>