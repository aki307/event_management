import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import axios from 'axios';

const Register = () => {
  const [userTypes, setUserTypes] = useState([]);
  const [groups, setGroups] = useState([]);
  const [state, setState] = useState({
    login_id: '',
    password: '',
    user_name: '',
    user_type_id: 1,
    group_id: 1,
  });


  useEffect(() => {
    // user_typesのデータを取得する
    axios.get('/api/user-types')
      .then(response => {
        setUserTypes(response.data); // データを状態にセットする
      })
      .catch(error => {
        console.error("There was an error fetching the user types!", error);
      });

    // groupsのデータを取得する
    axios.get('/api/groups')
      .then(response => {
        setGroups(response.data); // データを状態にセットする
      })
      .catch(error => {
        console.error("There was an error fetching the groups!", error);
      });
  }, []); // 空の依存配列でコンポーネントのマウント時のみ実行

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Field name: ${name}, Field value: ${value}`);
    setState(prevState => {
      const newState = { ...prevState, [name]: value };
      console.log('New state:', newState);
      return newState;
    });
  };
  


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Current state at submit:', state);
    Inertia.post('/register', state);
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              ユーザー登録
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* 名前フィールド */}
                <div className="mb-3">
                  <label htmlFor="user_name" className="form-label">氏名 (必須)</label>
                  <input type="text" className="form-control" id="user_name" name="user_name" required onChange={handleInputChange} />
                </div>
                {/* ログインIDフィールド */}
                <div className="mb-3">
                  <label htmlFor="login_id" className="form-label">ログインID (必須)</label>
                  <input type="text" className="form-control" id="login_id" name="login_id" required onChange={handleInputChange} />
                </div>
                {/* パスワードフィールド */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">パスワード (必須)</label>
                  <input type="password" className="form-control" id="password" name="password" required onChange={handleInputChange} />
                </div>
                {/* パスワード(確認用)フィールド */}
                <div className="mb-3">
                  <label htmlFor="password_confirmation" className="form-label">パスワード確認 (必須)</label>
                  <input type="password" className="form-control" id="password_confirmation" name="password_confirmation" required onChange={handleInputChange} />
                </div>
                {/* ユーザー種別セレクトボックス */}
                <div className="mb-3">
                  <label htmlFor="user_type_id" className="form-label">ユーザー種別 (必須)</label>
                  <select className="form-select" id="user_type_id" name="user_type_id" value={state.user_type_id} onChange={handleInputChange} required>
                    {userTypes.map((type) => (
                      <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                  </select>
                </div>
                {/* 所属グループセレクトボックス */}
                <div className="mb-3">
                  <label htmlFor="group_id" className="form-label">所属グループ (必須)</label>
                  <select className="form-select" id="group_id" name="group_id" value={state.group_id} onChange={handleInputChange} required>
                    {groups.map((group) => (
                      <option key={group.id} value={group.id}>{group.name}</option>
                    ))}
                  </select>
                </div>
                {/* 送信ボタン */}
                <button type="submit" className="btn btn-primary">登録</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
