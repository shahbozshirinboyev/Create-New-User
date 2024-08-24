// style 
import './App.css'

import { useState } from 'react'

// components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/footer'
import NewUserForm from './components/newuser/NewUserForm'
import UserList from './components/userList/userList'


function App() {

  // delete user statr function
  const deleteUser = (id) => {
    setUsers((prev)=>{
      return prev.filter((user) => {
        return user.id !== id
      })
    })
  }
  // delete user end function

  const closeModal = (e) => {
    if(e.target.className === 'overlay') setShowModal(false)
    if(e.key === 'Escape') setShowModal(false)
  }

  const [users, setUsers] = useState([])
  const [showModal, setShowModal] = useState(false)

  // add user
  const addUser = (user) => {
    setUsers((prev) => {
      return [... prev, user]
    })
    setShowModal(false)
  }

  return (
    <div className='App' onClick={closeModal} onKeyDown={closeModal}>

      <Navbar usersLength={users.length} />

      <main>
        <div className="no-users">
          { users.length === 0 && <h2>No Users</h2> }
        </div>
        < UserList users={users} deleteUser={deleteUser} />
      </main>

      { showModal && <NewUserForm addUser={addUser} /> }
      <button className='create-user' onClick={() => {setShowModal(true)}}>Create User</button>

      <Footer />
      
    </div>
  )
}

export default App