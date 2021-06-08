import React from 'react'

function LOginFOrm() {
    return (
        <Form className="loginForm">
            <h1><span className="font-weight-bold">mywebsite</span>.com</h1>
            <h2>Welcome</h2>
            <FormGroup>
                <Lable>Email</Lable>
                <Input type ="email" placeholder="email"></Input>
            </FormGroup>
        </Form>

    )
}

export default LOginFOrm
