import React from 'react';
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import CartIcon from "./CartIcon";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentAuthState } from "../redux/selectors/auth";
import { deleteSession } from '../redux/slices/auth';

function Navbar(props) {
  const { user } = useSelector(getCurrentAuthState);
  const dispatch = useDispatch();
  
  const logout = () => {
    dispatch(deleteSession());
  }

  return (
    <Menu>
      {!user &&
      <NavLink as='button' to='/signup' exact className='item' activeClassName='active-nav'>
        Sign Up
      </NavLink>
      }
      {!user &&
      <NavLink as='button' to='/signin' exact className='item' activeClassName='active-nav'>
        Sign In
      </NavLink>
      }
      {user && <NavLink to='/products' exact className='item' activeClassName='active-nav'>Products</NavLink> }
      {user &&
      <NavLink to='/cart' className='item' activeClassName='active-nav'>
        <CartIcon/>
      </NavLink>
      }
       {user &&
      <NavLink  style={{ marginLeft: 'auto'}} as='button' to='/' exact className='item' activeClassName='active-nav' onClick={() => logout()}>
        Log out
      </NavLink>
      }
    </Menu>
  );
}

export default Navbar;
