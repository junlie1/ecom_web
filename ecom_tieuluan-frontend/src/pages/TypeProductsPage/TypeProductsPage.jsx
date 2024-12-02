import React, { Fragment, useEffect, useState } from 'react';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'; 
import CardComponent from '../../components/CardComponent/CardComponent';
import { Row, Col, Pagination } from 'antd';  
import { WrapperNavbar, WrapperProducts } from './style';
import { useLocation } from 'react-router-dom';
import * as ProductService from '../../service/ProductService';


const TypeProductsPage = () => {
  const {state} = useLocation();
  
  const [products, setProducts] = useState([]);
  
  const fetchProductType = async (type) => {
    const res = await ProductService.getProductType(type);
    console.log('res',res);
    
    if(res?.status == "OK") {
        setProducts(res?.data);
    }else {

    }    
  }
  useEffect(() => {
    if(state) {
      fetchProductType(state)
    }
  }, [state])
  
  const onChange = () => { } // hết tới đây

  return (
    <div style = {{padding: '0 120px', background: '#efefef', height: 'calc(100vh - 64px)'}}>
      <Row style={{flexWrap:'nowrap', paddingTop: '10px' }}>
        <WrapperNavbar span={4}>
            <NavbarComponent />
        </WrapperNavbar>
        <Col span={20} style={{display: 'flex', flexDirection: 'column', justifyContent:'space-between'}}>
        <WrapperProducts>
            {products?.map((product) => {
                return <CardComponent 
                    key = {product._id}
                    type = {product.type}
                    rating = {product.rating}
                    price = {product.price}
                    name = {product.name}
                    image = {product.image}
                    description = {product.description}
                    countInStock = {product.countInStock}
                    discount = {product.discount}
                    selled = {product.selled}
                    id = {product._id}
                />
            })}
        </WrapperProducts>
          
      <Pagination showQuickJumper defaultCurrent={2} total={100} onChange={onChange} style={{textAlign: 'center', marginTop: '10px'}} />
        </Col>
      </Row>
    </div>
  )
}
export default TypeProductsPage;
