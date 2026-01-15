import { useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Spinner } from 'reactstrap'
import axios from 'axios'
import { toast } from 'react-toastify'
import Header from '../components/Header'

const ContactPage = props => {
    const [nameInput, setNameInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [messageInput, setMessageInput] = useState("")

    const [isSending, setIsSending] = useState(false)

    const handleSend = e => {
        e.preventDefault()
        setIsSending(true)
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
            .finally(() => setIsSending(false))
    }

    return <Container>
        <Row style={{ marginTop: "1rem" }}>
            <Col xs={12} md={{ size: 6, offset: 3 }}>
                <Header>Contact Us</Header>
                <Form onSubmit={handleSend}>
                    <FormGroup>
                        <Label htmlFor="name">Name</Label>
                        <Input name="name" required disabled={isSending} value={nameInput} onChange={e => setNameInput(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input name="email" required disabled={isSending} type="email" value={emailInput} onChange={e => setEmailInput(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="message">Message</Label>
                        <Input name="message" required disabled={isSending} type="textarea" style={{ height: "10rem" }} value={messageInput} onChange={e => setMessageInput(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        {isSending ? <Button color='primary' disabled>
                            <Spinner size="sm" />
                            <span>
                                {' '}Sending...
                            </span>
                        </Button> : <Button color='primary' type="submit">Send</Button>}
                    </FormGroup>
                </Form>
            </Col>
        </Row>
    </Container>
}

export default ContactPage