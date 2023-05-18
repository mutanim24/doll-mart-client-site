import React from 'react';
import bg from '../../assets/react.png'

const Blog = () => {

    return (
        <div>
            <div className="banner relative">
                <div className='bg-fixed' style={{
                    backgroundImage: `url(${bg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '150px'
                }}>

                </div>
                <div className="banner-content absolute top-0 bg-black h-[150px] w-full bg-opacity-70 text-center pt-10">
                    <div className='text-white text-center'>
                        <h1 className='text-3xl font-bold mb-5'>Blogs</h1>
                        <p className='font-semibold'>Now more about React, Back-end & Authentication</p>
                    </div>
                </div>
            </div>
            <div className='px-6 md:px-14 grid md:grid-cols-2 gap-6 my-10'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src={bg} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                        <p>Access token: A credential used to authenticate and authorize a user or client application to access protected resources on a server. It is typically a JSON Web Token (JWT) and is included in each request to the server to prove the client's identity.

                            Refresh token: A token used to obtain a new access token when the current access token expires. It is typically long-lived and is securely stored on the client-side, usually in an HTTP-only cookie or local storage. The refresh token is sent to the server to request a new access token without requiring the user to reauthenticate.</p>

                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src={bg} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">2. Compare SQL and NoSQL databases?</h2>
                        <p>SQL Databases: <br />

                            Data Model: SQL databases use a structured data model based on tables with predefined schemas. They enforce relationships between tables through primary and foreign keys.
                            Query Language: SQL databases use the SQL language for defining and manipulating data, providing powerful query capabilities for complex operations like joins, aggregations, and transactions. <br /> <br />

                            NoSQL Databases: <br />

                            Data Model: NoSQL databases use flexible data models such as key-value, document, column-family, or graph, allowing for dynamic schemas and unstructured data.
                            Query Language: NoSQL databases use different query languages or APIs specific to their data model. Some may support a query language similar to SQL, but others rely on simple key-based lookups or document-based queries.</p>

                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src={bg} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">3.What is express js? What is Nest JS?</h2>
                        <p>Express.js is a web application framework for Node.js that simplifies the process of building web applications and APIs. <br />

                            Nest.js is a progressive TypeScript-based web application framework built on top of Express.js, providing enhanced development features and architectural patterns.</p>

                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src={bg} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">4. What is MongoDB aggregate and how does it work?</h2>
                        <p>MongoDB's aggregate is a method used to perform advanced data aggregation operations on data stored in a MongoDB database. It allows you to process and analyze data using a pipeline of stages.

                            The aggregation pipeline consists of multiple stages, where each stage performs a specific operation on the data. These stages can include filtering, grouping, sorting, projecting, and performing various calculations or transformations on the data.</p>

                    </div>
                </div>
            </div>

        </div>

    );
};

export default Blog;