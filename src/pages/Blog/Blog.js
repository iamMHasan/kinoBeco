import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('blog')
    return (
        <div className='h-[100vh]'>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box ">
                <div className="collapse-title text-xl font-medium">
                What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>Here are the list for React State Management <br />
                    -redux -Jotai -rematch -Zustand
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework. <br /> <br />
                    React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework. <br /><br />
                    he Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework. <br /><br />
                    AngularJS, the original framework, is an MVC (Model-View-Controller)) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;