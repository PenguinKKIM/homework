import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
function Join() {
    return (  <>
        <section className="board-form-section">
        <h4>회원가입</h4>
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

            <FormGroup row>
                <Col sm="3">
                <Label for="loginPassword">패스워드 확인</Label>
                </Col>
                <Col sm="9">
                <Input id="loginPassword" type="password" placeholder="패스워드를 한번 더 입력하세요"></Input>
                </Col>
            </FormGroup>
    
            <FormGroup>
                <Col sm="12">
                    <Button color="primary">회원가입</Button>
                </Col>
            </FormGroup>
    
        </Form>
        </section>
        </>);
}

export default Join;