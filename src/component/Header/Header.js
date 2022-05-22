import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../img/logo1.png';
import './Header.css';
import toast from 'react-hot-toast';
import { FiLogOut } from 'react-icons/fi';
import { FaCrown } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { IoMdAnalytics } from 'react-icons/io';


const Header = () => {
    const [user] = useAuthState(auth);
    console.log(user);

    const handleLogout = () => {
        signOut(auth);
        toast.success('user signout successfully');
    }
    return (
        <div>
            <p className='top text-center text-light py-3 m-0'>The more you practice the better you'll be, the harder you train the great in you they'll see.</p>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img src={logo} alt="" height={60} width={150} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to='home'>Home</Nav.Link>
                            <Nav.Link as={Link} to='model-test'>Model Test</Nav.Link>
                            <Nav.Link as={Link} to='bcs-exam'>BCS Exam</Nav.Link>
                            <Nav.Link as={Link} to='books'>Books</Nav.Link>
                            {user?.email === 'azmain.work@gmail.com' && user?.emailVerified === true
                                ? <NavDropdown title='Admin' id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to='add-questions'>Add Questions</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to='all-questions'>Manage Questions</NavDropdown.Item>
                                </NavDropdown>
                                : ''
                            }
                            {
                                user ?
                                    <>
                                        <NavDropdown title='Profile' id="basic-nav-dropdown">
                                            <NavDropdown.Item><span className='text-success'>{user.displayName}</span></NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to='profile'> <span className='text-dark'>Your Profile <CgProfile /></span> </NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to='analytics'><span className='text-dark'>Analytics <IoMdAnalytics /></span> </NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to='leader-board'><span className='text-warning'>Leader Board <FaCrown /></span> </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item onClick={handleLogout}> <span className='text-info'>Logout <FiLogOut /></span> </NavDropdown.Item>
                                        </NavDropdown>
                                    </>
                                    : <Nav.Link as={Link} to="login">Login</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
            <hr className='m-0' style={{ height: '3px', backgroundColor: 'rgb(70, 83, 143)' }}></hr>
        </div >
    );
};

export default Header;