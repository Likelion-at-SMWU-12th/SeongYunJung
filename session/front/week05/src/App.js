import React, { useCallback, useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = useCallback(
    (e) => {
      const { value, name } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "sookmyung",
      email: "sookmyung@example.com",
      active: true,
    },
    {
      id: 2,
      username: "mutsa",
      email: "likelionsmwu@example.com",
      active: false,
    },
    {
      id: 3,
      username: "yunjung",
      email: "ynzung@example.com",
      active: false,
    },
  ]);

  // 지금 3개는 미리 만들어두었고 수정이나 추가하려면 4번쨰부터 해야함
  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers(users.concat(user));

    setInputs({
      username: "",
      email: "",
    });
    //새로 추가될때마다 nextId를 하나씩 증가시켜줘야함
    nextId.current += 1;
  }, [username, email]);

  //id가 다른 상황만 추출하는 코드
  const onRemove = useCallback(
    (id) => {
      setUsers(users.filter((user) => user.id !== id));
    },
    [users]
  );

  //활성화 되어 있는지 확인하기 위한 함수
  const onToggle = useCallback(
    (id) => {
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    },
    [users]
  );

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <br />
      <hr />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
