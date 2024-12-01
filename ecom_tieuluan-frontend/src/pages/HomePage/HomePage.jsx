import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import { WrapperTypeProduct, WrapperSortFilter, WrapperPagination, WrapperProducts, Dropdown } from './style'; // Import WrapperSlider
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import banner1 from '../../accsets/images/banner1.png';
import banner2 from '../../accsets/images/banner2.png'; 
import banner3 from '../../accsets/images/banner3.png'; 
import CardComponent from '../../components/CardComponent/CardComponent';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import { Color } from 'antd/es/color-picker';
import {useQuery} from '@tanstack/react-query'
import * as ProductService from '../../service/ProductService';
import { useSelector } from 'react-redux';

const HomePage = () => {
    const arr = ['TV', 'Tủ lạnh', 'Máy tính']

     const location = useLocation();
     const searchParams = new URLSearchParams(location.search);
     const searchKeyword = searchParams.get('search') || '';
     
    const [sortCriteria, setSortCriteria] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [filterType, setFilterType] = useState('');
 

    
    const fetchProductAll = async () => {
        // console.log('Đang gọi API với searchKeyword:', searchKeyword); // Debug
        const res = await ProductService.getAllProduct({
            page: currentPage,
            limit: 8,
            sort: sortCriteria,
            filter: filterType,
            search: searchKeyword,
        });
        // console.log('Kết quả API:', res.data.data); // Debug

        return res.data.data; // lí do thêm .data trả về một list nhưng chỉ cần data (nhớ ở console F12)
    }

    // destructuring assignment
    const { data: products, isLoading } = useQuery(['products', currentPage, sortCriteria, filterType, searchKeyword], fetchProductAll); 

    console.log('data', products);

    
    return (
        <>
            <div style={{width: '1270px', margin: '0 auto'}}>
                <WrapperTypeProduct>
                    {arr.map((item) => {
                        return (
                            <TypeProduct 
                                name = {item} 
                                key={item}
                            />
                        );
                    })}
                </WrapperTypeProduct>

            </div>

            <div className="body" style={{ width: '100%', backgroundColor: '#fefefe' }}>
                <div id="container" style={{ width: '1270px', margin: '0 auto' }}>
                    {/* Slider */}
                    <SliderComponent arrImages={[banner1, banner2, banner3]} />

                    <WrapperSortFilter>
                    <Dropdown onChange={(e) => setSortCriteria(e.target.value)}>
                        <option value="">Sắp xếp:</option>
                        <option value="price_asc">Giá tăng dần</option>
                        <option value="price_desc">Giá giảm dần</option>
                        <option value="rating_desc">Đánh giá cao nhất</option>
                    </Dropdown>
                </WrapperSortFilter>        

                    {/* Danh sách sản phẩm */}
                    <WrapperProducts>
                        {isLoading ? (
                            <div>Đang tải...</div>
                        ) : products?.length > 0 ? (
                            products.map((product) => (
                                <CardComponent
                                    key={product._id}
                                    type={product.type}
                                    rating={product.rating}
                                    price={product.price}
                                    name={product.name}
                                    image={product.image}
                                    description={product.description}
                                    countInStock={product.countInStock}
                                    discount={product.discount}
                                    selled={product.selled}
                                    id={product._id}
                                />
                            ))
                        ) : (
                            <div className="empty">Không có sản phẩm nào</div>
                        )}
                    </WrapperProducts>

                    {/* Phân trang */}
                    <WrapperPagination>
                        {[...Array(5)].map((_, index) => (
                            <button
                                key={index}
                                className={index === currentPage ? 'active' : ''}
                                onClick={() => setCurrentPage(index)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </WrapperPagination>
                </div>
            </div>
        </>
        
    );
};

export default HomePage;
