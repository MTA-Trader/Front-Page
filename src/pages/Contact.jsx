import { useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import axios from 'axios'
import { toast } from 'react-toastify'
import Header from '../components/Header'

const ContactPage = props => {
    const [nameInput, setNameInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [messageInput, setMessageInput] = useState("")

    const handleSend = e => {
        e.preventDefault()
        axios.post("api/contact", {
            Name: nameInput,
            Email: emailInput,
            Message: messageInput
        })
            .then(() => {
                toast.info("Thank you. A message has been sent.")
                setMessageInput("")
            })
            .catch(() => toast.error("Sorry, an error occurred. Please try emailing jsheadel@mta-trader.com"))
    }

    return <Container>
        <Row style={{ marginTop: "1rem" }}>
            <Col xs={12} md={{ size: 6, offset: 3 }}>
                <Header>Contact Us</Header>
                <Form onSubmit={handleSend}>
                    <FormGroup>
                        <Label htmlFor="name">Name</Label>
                        <Input name="name" required value={nameInput} onChange={e => setNameInput(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input name="email" required type="email" value={emailInput} onChange={e => setEmailInput(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="message">Message</Label>
                        <Input name="message" required type="textarea" style={{ height: "10rem" }} value={messageInput} onChange={e => setMessageInput(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit">Send</Button>
                    </FormGroup>
                </Form>
            </Col>
        </Row>
    </Container>
}

export default ContactPage