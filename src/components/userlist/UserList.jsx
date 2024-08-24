// style
import './UserList.css'

function UserList({ users, deleteUser }) {
  return (
    <div className='userList'>
      <div className='userList-container container'>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <div className='card-inner'>
                <img src={user.image} alt={user.firstName} />
                <h4> {user.firstName} {user.lastName}, {user.age} age.</h4>
                <p>From: {user.from}</p>
                <p>Job: {user.job}</p>
                <p>Gender: {user.gender}</p>
                <button onClick={() => { deleteUser(user.id) }}> <i class="bi bi-trash3"></i> Delete </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UserList