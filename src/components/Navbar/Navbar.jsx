import React, { useState } from 'react';
import { 
    CartStyled,
    HomeContainerStyled, 
    LinkContainerStyled, 
    LinksContainerStyled,  
    NavbarContainerStyled,  
    SpanStyled, 
    UserContainerStyled, 
    UserNavStyled 
} 
from './NavbarStyles';
import { FcHome } from "react-icons/fc";
import { motion } from "framer-motion";
import CartIcon from '../CartIcon/CartIcon';
import { Link, useNavigate } from 'react-router-dom';
import ModalUser from '../ModalUser/ModalUser';
import ModalCart from '../ModalCart/ModalCart';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuHidden } from '../redux/user/userSlice';
import BurguerButton from '../BurguerButton/BurguerButton';
import ModalMenu from '../ModalMenu/ModalMenu';


function Navbar() {
    const currentUser = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const [clicked, setClicked] = useState(false);
    

    

    return (
    <NavbarContainerStyled>
        <ModalCart />
        <ModalUser />
        <ModalMenu/>
        <div>
            <Link to='/'>
                <img 
            src='https://res.cloudinary.com/dqhrvfasu/image/upload/c_scale,w_65/v1687555476/logo/Free_Sample_By_Wix_1_f4u8nm.jpg' 
            alt='Logo'
            />
            </Link>
        </div>
        <LinksContainerStyled>
            <HomeContainerStyled>
                <motion.div whileTap={{ scale:0.97 }}>
                    <Link to='/'>
                        <LinkContainerStyled home>
                            <FcHome />
                        </LinkContainerStyled>
                        Home
                    </Link>
                </motion.div>
            </HomeContainerStyled>
            <CartStyled>
                <CartIcon  />
            </CartStyled>
            <UserNavStyled>
                <UserContainerStyled onClick={() => 
                    currentUser
                    ? dispatch(toggleMenuHidden())
                    : navigate("/login")
                }>
                    <SpanStyled>
                        {
                            currentUser ? `${currentUser.nombre}` : 'Iniciá Sesion'
                        }
                    </SpanStyled>
                </UserContainerStyled>
            </UserNavStyled>
            <motion.div whileTap={{ scale:0.95 }}>
                <BurguerButton />
            </motion.div>
        </LinksContainerStyled>
    </NavbarContainerStyled>
    );
}

export default Navbar;