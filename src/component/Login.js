import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";

function Login() {
    return ( 
    <>
    <section className="board-form-section">
    <h4>로그인</h4>
    <Form className="board-form-container">
        <FormGroup row>
            <Col sm="3">
            <Label for="loginID">아이디</Label>
            </Col>
            <Col sm="9">
            <Input id="loginID" type="text" placeholder="아이디를 입력하세요"></Input>
            </Col>
        </FormGroup>

        <FormGroup row>
            <Col sm="3">
            <Label for="loginPassword">패스워드</Label>
            </Col>
            <Col sm="9">
            <Input id="loginPassword" type="password" placeholder="패스워드를 입력하세요"></Input>
            </Col>
        </FormGroup>

        <FormGroup>
            <Col sm="12">
                <Button color="primary">로그인</Button>
            </Col>
        </FormGroup>

    </Form>
    </section>
    
    </> );
}

export default Login;