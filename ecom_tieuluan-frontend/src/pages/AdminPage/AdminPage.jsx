import { Flex, Menu } from 'antd'
import React, { useState } from 'react'
import { getItem } from '../../utils';
import { UserOutlined, ProductOutlined } from '@ant-design/icons'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import AdminUser from '../../components/AdminUser/AdminUser';
import AdminProduct from '../../components/AdminProduct/AdminProduct';

const AdminPage = () => {
  const items = [
    getItem('Người dùng', 'user', <UserOutlined />), // getItem tạo từng mục
    getItem('Sản phẩm', 'product', <ProductOutlined />)
  ];

  // Lưu trạng thái của mục được chọn & Hàm dùng để cập nhật trạng thái
  const [keySelected, setKeySelected] = useState('')

  const renderPage = (key) => {
    switch (key) {  
      case 'user':
        return (
          <AdminUser />
        )
      case 'product':
        return (
          <AdminProduct />
        )
    
      default:
        return <></>
    }
  }

  const handleOnClick = ({key}) =>{
    setKeySelected(key)
  }
  return (
    <>
        <HeaderComponent isHiddenSearch isHiddenCart />
        <div style={{display: 'flex',}}> {/* flex ~ widget */}
          <Menu
            mode="inline"
            style={{
              width: 256,
              boxShadow: '1px 1px 2px #ccc',
              height: '100vh'
            }}
            items={items}
            onClick={handleOnClick}
          />
          <div style={{ flex:1 , padding: '15px'}}>
            {renderPage(keySelected)}
          </div>
        </div>
    </>        
  )
}

export default AdminPage