import { useDispatch } from "react-redux"
import { userSlice } from "../store/slices/UserSlice"

const DeleteAllUsers = () => {
const dispatch = useDispatch()
  const deleteallUsers =()=>{
    dispatch(userSlice.actions.clearAllUser())
  }
  return (
    <button onClick={deleteallUsers} className='btn add-btn'>DeleteAllUsers</button>
  )
}

export default DeleteAllUsers

