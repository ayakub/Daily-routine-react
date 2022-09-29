import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='container'>
            <div className='questions-container'>
                <h2>Questions Answere</h2>
                <div>
                    <h3>How does react works?</h3>

                    <p>While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM.
                        Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it's worth keeping a DOM tree in it to speed up its manipulation.
                        Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. </p>
                </div>
                <div>
                    <h3>Difference the between state & props?</h3>
                    <p><strong>Props: </strong>The Data is passed from one component to another.It is Immutable (cannot be modified).Props can be used with state and functional components.
                    </p>
                    <p><strong>State:</strong>The Data is passed within the component only.It is Mutable ( can be modified).State can be used only with the state components/class component (Before 16.0)</p>
                </div>
                <div>
                    <h3> what useEffect   API loading works  other than  useEffect?</h3>
                    <p>Keep track of when the request is loading through state. If the request is still loading you can display a spinner. Once you get the data back then you can display it. If no data is returned you can display your "No data found" message. Typically you don't want to block your UI from rendering when you're making an async request. A loading spinner is a better indicator to your end user that your app is trying to load data in the background. </p>
                </div>
            </div>
        </div>
    );
};

export default Questions;