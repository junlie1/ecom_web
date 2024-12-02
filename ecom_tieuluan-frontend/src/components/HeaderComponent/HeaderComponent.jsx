import React, { useEffect, useState } from 'react';
import { Badge, Button, Col, Popover,Input  } from 'antd';
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccount, WrapperTextHeaderSmall, WrapperContentPopup } from './style.js';
import Search from 'antd/lib/transfer/search';
import * as UserService from '../../service/UserService.js';
import {useNavigate} from 'react-router-dom';
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined,
    SearchOutlined
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useSelector, useDispatch } from 'react-redux';
import { resetUser } from '../../redux/slides/userSlide.js';


const HeaderComponent = ({isHiddenSearch = false, isHiddenCart = false}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userName,setUserName] = useState('');
    const [userAvatar,setUserAvatar] = useState('');
    const [searchText, setSearchText] = useState(''); // Search
    const user = useSelector((state) => state.user );
    const order = useSelector((state) => state.order)


    const handleNavigateLogin = () => {
        navigate('/sign-in')
    }
    const handleSearch = () => {
        if (searchText.trim() !== '') {
            navigate(`/?search=${encodeURIComponent(searchText.trim())}`); // Điều hướng đến HomePage với từ khóa tìm kiếm
        }
    };

    // console.log("user", user);

    useEffect(() => {
        setUserName(user?.name);
        setUserAvatar(user?.avatar);
    },[user?.name], [user?.avatar])

    const handleLogout = async () => {
        await UserService.logoutUser()
        localStorage.removeItem('access_token'); // Xóa access_token khỏi localStorage
        dispatch(resetUser()); // Cập nhật Redux state
        navigate('/sign-in'); 
    }

    const content = (
        <div>
            <WrapperContentPopup onClick = {() => navigate('/profile-user')}>Thông tin cá nhân</WrapperContentPopup>
            <WrapperContentPopup onClick = {() => navigate('/my-order')}>Lịch sử đơn hàng</WrapperContentPopup>
            {user?.isAdmin &&(
                <WrapperContentPopup onClick = {() => navigate('/system/admin')}>Quản lí hệ thống</WrapperContentPopup>
            )}
            <WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
        </div>
    );
    
  return (
    <div style={{width: '100%', background: 'rgb(26,248,255)',justifyContent: 'center'}}>
        <WrapperHeader gutter={16} style={{justifyContent:isHiddenSearch && isHiddenCart ? 'space-between' : 'unset'}}>
            <Col span={5} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <WrapperTextHeader style={{cursor:'pointer'}} onClick={() => navigate('/')}>Nhóm 3</WrapperTextHeader>
            </Col>
            {!isHiddenSearch && (
                    <Col span={13}>
                        <div style={{ display: 'flex' }}>
                            <Input
                                size="large"
                                placeholder="Nhập từ khóa tìm kiếm..."
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                            <Button
                                size="large"
                                type="primary"
                                onClick={handleSearch}
                                icon={<SearchOutlined />}
                            >
                                Tìm Kiếm
                            </Button>
                        </div>
                    </Col>
                )}
                <Col span={6}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                    <WrapperHeaderAccount>
{userAvatar ? (
    <img src={userAvatar} style={{width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover'}}/>
) : (
    <UserOutlined style={{ fontSize: '30px' }} />
)
}
{user?.access_token ? (
    <>
        <Popover content = {content} trigger="click">
            <div style={{cursor:'pointer'}}>{userName?.length ? userName : user?.email}</div>
        </Popover>
    </>
) : (
<div onClick={handleNavigateLogin} style={{cursor:'pointer'}}>
                            <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
)}

                        
                    </WrapperHeaderAccount>
                    {!isHiddenCart && (
                        <div style={{ display: 'flex', alignItems: 'center', cursor:'pointer' }} onClick={() => navigate('/order')}>
                        <Badge count = {order?.orderItems.length} size='small'>
                            <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
                        </Badge>

                        <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                    </div>
                    )} 
                </div>
            </Col>
        </WrapperHeader>
    </div>
  );
}

export default HeaderComponent;
