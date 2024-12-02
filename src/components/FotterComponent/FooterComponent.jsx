import React from 'react';

const FooterComponent = () => {
    return (
        <footer style={{ backgroundColor: '#000', color: '#fff', padding: '20px 0', marginTop: '50px' }}>
            <div style={{ maxWidth: '1270px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {/* Giới thiệu */}
                <div style={{ flex: '1', minWidth: '200px', marginBottom: '20px' }}>
                    <h3>GIỚI THIỆU</h3>
                    <p>Nhóm 3 - Nơi dân chơi hội tụ</p>
                    <p>📞 0987654321</p>
                    <p>🕒 Giờ mở cửa: 08:30 - 22:00</p>
                    <p>Nhân viên tư vấn phản hồi tin nhắn khi ránh</p>
                </div>

                {/* Địa chỉ cửa hàng */}
                <div style={{ flex: '1', minWidth: '200px', marginBottom: '20px' }}>
                    <h3>ĐỊA CHỈ CỬA HÀNG</h3>
                    <p>📍 HỒ CHÍ MINH:</p>
                    <p>Học Viện Hàng Không Việt Nam</p>
                </div>

                {/* Phương thức thanh toán */}
                <div style={{ flex: '1', minWidth: '200px', marginBottom: '20px' }}>
                    <h3>PHƯƠNG THỨC THANH TOÁN</h3>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <img src="/static/images/vnpay.png" alt="VNPay" style={{ height: '40px' }} />
                        <img src="/static/images/cod.png" alt="COD" style={{ height: '40px' }} />
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                BẢN QUYỀN THUỘC VỀ Nhóm 3 Khoa CNTT VAA
            </div>
        </footer>
    );
};

export default FooterComponent;
