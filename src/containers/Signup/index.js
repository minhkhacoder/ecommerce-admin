import React, {useState} from 'react'
import Layout from '../../components/Layout'
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import Input from '../../components/UI/input';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../actions';

/**
* @author
* @function Signup
**/

export const Signup = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    
    const userSignup = (e) => {

        e.preventDefault();
        
        const user = {
            firstName, lastName, email, password
        }

        dispatch(signup(user));
    }

    if(auth.authenticate) {
        return <Redirect to={'/'} />;
    }

    if(user.loading) {
        return <p>Loading...!</p>
    }

    return (
        <Layout>
            <Container>
                {user.message}
                <Row style={{ marginTop: "5rem" }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={userSignup}>
                            <Row>
                                <Col md={6}>
                                    <Input
                                        label="First Name"
                                        placeholder="First name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </Col>

                                <Col md={6}>
                                    <Input
                                        label="Last Name"
                                        placeholder="Last name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </Col>
                            </Row>
                            <Input
                                label="Email"
                                placeholder="Email"
                                value={email}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input
                                label="Password"
                                placeholder="Password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )

}

export default Signup;