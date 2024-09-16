import React from "react";

const User = ({ user, onRemove, onToggle }) => {
  return (
    <div>
      <b
        style={{ cursor: "pointer", color: user.active ? "red" : "black" }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
};

const UserList = ({ users, onRemove, onToggle }) => {
  //users 객체를 만들어서 id, name, email을 넣어줌

  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default React.memo(UserList);
