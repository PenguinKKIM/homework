import { Nav, NavItem, NavLink, Navbar, NavbarBrand} from "reactstrap";

function KostaNavBar() {
  
   return (
 
        <Navbar color="light" className="nav-container">
          <NavbarBrand href="/" className="nav-logo">Kosta.com</NavbarBrand>

            <Nav>
              <NavItem>
                <NavLink href="/login"> 로그인 </NavLink>                
              </NavItem>
              <NavItem>
                <NavLink href="/join"> 회원가입</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/reactboard"> 게시판 </NavLink>
              </NavItem>             
            </Nav>
  
        </Navbar>

    );
}

export default KostaNavBar;