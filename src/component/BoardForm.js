import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";

function BoardForm() {
    return (
        <section className="board-form-section">
        <Form className="board-form-container">
            <h4 className="board-list-title">게시판 글 등록</h4>
            
            <FormGroup row>
                <Col sm="2">
                <Label for="boardForm-writer">글쓴이</Label>
                </Col>
                <Col sm="10">
                <Input id="boardForm-writer" type="text"></Input>
                </Col>
            </FormGroup>

            <FormGroup row>
                <Col sm="2">
                <Label for="boardForm-title">제목</Label>
                </Col>
                <Col sm="10">
                <Input id="boardForm-title" type="text"></Input>
                </Col>
            </FormGroup>

            <FormGroup row>
                <Col sm="2">
                <Label for="boardForm-context">내용</Label>
                </Col>
                <Col sm="10">
                <Input id="boardForm-context" type="text" className="context"></Input>
                </Col>
            </FormGroup>

            <FormGroup row>
                <Col sm="3">
                <Label for="boardForm-img">이미지파일 첨부</Label>
                </Col>
                <Col sm="9">
                <Input id="boardForm-img" type="file"></Input>
                </Col>
            </FormGroup>
       
            <Button color="primary" className="form-btn">등록</Button>
            <Button color="primary" className="form-btn">다시쓰기</Button>
        </Form>

        </section>
    );
}

export default BoardForm;