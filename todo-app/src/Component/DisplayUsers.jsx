import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components";
import { userSlice } from "../store/slices/UserSlice";
import { FaDeleteLeft } from "react-icons/fa6";
const DisplayUsers = () => {
    const dispatch = useDispatch();
    const data = useSelector((state)=>{
        return state.users;
    })
    const removeUser = (userId) =>{
        dispatch(userSlice.actions.removeUser(userId))
    }
  return (
    <Wrapper>
        {
            data.map((user,id) => {
               return(
               <li key={id}>
                    {user} 

                    <button className="delete-btn" onClick={()=> removeUser(id)} > <FaDeleteLeft className="delete-icon" /></button>
                </li>
               )
            })
        }

    </Wrapper>
  )
}

export default DisplayUsers;

const Wrapper = styled.section`
   li {
   width:100%;
   display:flex;
   align-items:center;
   justify-content:space-between;
   padding:1rem;
   border-bottom:1px solid #eee;
    
  }
     .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
`;