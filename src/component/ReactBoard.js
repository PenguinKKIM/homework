import { useEffect, useState } from 'react';
import {Button, Col, Form, FormGroup, Input, Pagination, PaginationItem, PaginationLink, Table} from 'reactstrap';
import { Link } from 'react-router-dom';
function ReactBoard() {
 
    const [currentDate, setCurrentDate] = useState('');
    
    useEffect(() => {
            setCurrentDate(getCurrentDate());
        }, []);
    
    function getCurrentDate() {
            const today = new Date();
            const year = today.getFullYear();
            const month = today.getMonth() + 1;
            const day = today.getDate();
            return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        }
    
    return ( 
        <>
        <section className='board-section'>
        <div className='board-container'>
            <h4 className='board-list-title'>게시판 글 목록</h4>
            <Form className='form-container'>
            <FormGroup row>
                <Input id="boardSearchSelect" name="select" type="select">
                    <option> 제목 </option>
                    <option> 작성자 </option>
                    <option> 조회수 </option>
                </Input>
            </FormGroup>
            <FormGroup row>
                <Col sm="7">              
                <Input id="boardSearch" name="select" type="search" placeholder='검색어 입력'/>
                </Col>
                <Col sm="5"> 
                <Button>검색</Button>
                </Col>
            </FormGroup>
            <Link to="/BoardForm"><Button color='success'>글쓰기</Button></Link>
            </Form>
            <Table bordered>
            {/* 테이블 헤드 */}
            <thead>
                <tr>
                    <th> 번호 </th>
                    <th> 제목 </th>
                    <th> 작성자  </th>
                    <th> 날짜 </th>
                    <th> 조회수  </th>
                    <th> 삭제 </th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th scope="row"> 1 </th>
                    <td> 제목 </td>
                    <td> 김펭귄 </td>
                    <td> {currentDate} </td>
                    <td> 1 </td>
                    <td> <Button>삭제</Button> </td>
                </tr>
            </tbody>

        </Table>
         
        <Pagination aria-label="Page navigation" size="sm">
        <PaginationItem>
            <PaginationLink first href="#"/>
        </PaginationItem>

        <PaginationItem>
            <PaginationLink href="#" previous/>
        </PaginationItem>

        <PaginationItem>
            <PaginationLink href="#">
            1
            </PaginationLink>
        </PaginationItem>

        <PaginationItem>
            <PaginationLink href="#">
            2
            </PaginationLink>
        </PaginationItem>

        <PaginationItem>
            <PaginationLink href="#">
            3
            </PaginationLink>
        </PaginationItem>

        <PaginationItem>
            <PaginationLink href="#" next/>
        </PaginationItem>

        <PaginationItem>
            <PaginationLink href="#" last/>
        </PaginationItem>

        </Pagination>
    </div>
    </section>
    </> );
}

export default ReactBoard;