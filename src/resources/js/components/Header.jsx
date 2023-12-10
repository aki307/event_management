import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const Header = () => {
  return (
    <header className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        {/* ロゴやタイトル */}
        <InertiaLink className="navbar-brand" href="/">Event Manager</InertiaLink>

        {/* トグルボタン */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ナビゲーションリンク */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <InertiaLink className="nav-link" href="/">ホーム</InertiaLink>
            </li>
            <li className="nav-item">
              <InertiaLink className="nav-link" href="/events">イベント管理</InertiaLink>
            </li>
            <li className="nav-item">
              <InertiaLink className="nav-link" href="/users">ユーザ管理</InertiaLink>
            </li>
            {/* 他のリンクも同様に追加 */}
          </ul>
          {/* ユーザー関連のコントロールもナビゲーションの一部として追加 */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <InertiaLink className="nav-link" href="/login">ログイン</InertiaLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
