import React from 'react';
import CreateLink from '../CreateLink/CreateLink';
import Header from '../Header/Header';
import LinkList from '../LinkList/LinkList';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import Search from '../Search/Search';

const App = () => (
  <div className="center w85">
    <Header />
    <div className="ph3 pv1 background-gray">
      <Routes>
        <Route path="/" element={<Navigate replace to="/new/1" />} />
        <Route path="/new/1" element={<LinkList />} />
        <Route path="/create" element={<CreateLink />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  </div>
);

export default App;
