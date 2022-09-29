import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div>
            <div className='questionSet'>
            
            1.How does React work?  <br /> <br />
  
            <div className='ans'>
            Ans:While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. 

            </div>
           
<br />
 2.Difference between state and props in React? <br />
 <br />
 <div className='ans'>
 1.Props are read-only.	State changes can be asynchronous. <br />
    2.Props are immutable.	State is mutable. <br />
    3.Props allow you to pass data from one component to other components as an argument.	State holds information about the components. <br />
    4.Props can be accessed by the child component.	State cannot be accessed by child components. <br />
    5.	Props are used to communicate between components.	States can be used for rendering dynamic changes with the component. <br />
    6.	Stateless component can have Props.	Stateless components cannot have State. <br />
    7.Props make components reusable.	State cannot make components reusable. <br />
 </div>
  
     <br /> 
    3.  UseEffect Use case without Data load <br /> <br />
    <div className='ans'>
     1.Running on state change: validating input field <br />
          2. Running on state change: live filtering <br />
          3.  Running on state change: trigger animation on new array value <br />
          4.  Running on props change: update paragraph list on fetched API data update <br />
           5. Running on props change: updating fetched API data to get BTC updated price <br />
    </div>

           
            </div>
          
        </div>
    );
};

export default Questions;
