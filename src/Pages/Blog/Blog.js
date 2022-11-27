import React from 'react';
import image from '../../images/react vs angular vs vue.png'

const Blog = () => {
    return (
        <div>
            <div className="card ml-28 mt-5 w-3/4 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p> At least 7 ways to handle in state in react apps. Let us briefly explore a few of them in this part.</p>
                    <ul className='font-bold'>
                        URL-
                    </ul>
                    We can use URL to store some data e.g.
                        <li>The id of the current item, being viewed</li>
                        <li>Filter parameters</li>
                        <li>Pagination offset and limit</li>
                        <li>Sorting data</li>
                    <h4 className='font-bold'>Web Storage</h4>
                    <li>The second option is to store the state in the browser via web storage. 
                        This is useful when we want to persist state between reloads and reboots. 
                        Examples include cookies, local storage, and IndexedDB. These are native browser technologies.</li>
                    <h4 className='font-bold'>Local State</h4>
                    <li>The third option is to use store state locally. It is useful when one component needs the state. 
                        Examples include a toggle button, a form, etc.</li>
                    <h4 className='font-bold'>Lifted State</h4>
                    <li>The Fourth option is to define the state in the parent component. Often, 
                        the same state is used across multiple components. In those cases, 
                        it is useful to lift the state to a common parent. The lifting state is a two-step process. 
                        First, we declare the state in a common parent component, and then we pass the state down to child components via props. 
                        This pattern should be considered any time a few related components need to use the same state. 
                        The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state.</li>
                    <h4 className='font-bold'>Derived State</h4>
                    <li>The fifth option is to compute the new state based on the available state and we do not need to declare a state at all. 
                        If there are existing values that can be composed to give us the information we need, then we can calculate that information on each render instead of storing it. Some examples include calling .length on an array to determine the number of records instead of storing a separate numItems variable in the state or deriving an errorsExist boolean by checking if the errors array is empty.</li>
                    
                </div>
            </div>
            <div className="card ml-28 mt-5 w-3/4 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <li>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. 
                        It is a method by which an object can inherit the properties and methods of another object. Traditionally, 
                        in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</li>
                                        
                </div>
            </div>
            <div className="card ml-28 mt-5 w-3/4 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
                    <li>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test."Modern versions of unit testing can be found in frameworks like JUnit, or testing tools like TestComplete.</li>
                    <li>To verify the correctness of the code. To test every function and procedure. To fix bugs early in the development cycle and to save costs. To help the developers to understand the code base and enable them to make changes quickly.</li>
                                        
                </div>
            </div>
            <div className="card ml-28 mt-5 w-3/4 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">React vs. Angular vs. Vue?</h2>
                    <img src={image} alt="" />
                                        
                </div>
            </div>
        </div>
    );
};

export default Blog;