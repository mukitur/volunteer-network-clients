import React from 'react';
import { Button, Container, Form, FormControl } from 'react-bootstrap';
import './Home.css';


const Home = () => {
    return (
        <div>
            <h2 className="mt-5 mb-3">I GROW HELPING PEOPLE IN NEED</h2>
            <div>
                <Container className="home-search rounded">
                    <Form className="d-flex ">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-1"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Container>
            </div>
        </div>
    );
};

export default Home;