const handleCreateOrder = async () => {
    try {
        // Gọi API tạo order
        const orderResponse = await createOrder(orderData);
        
        if(orderResponse.status === "OK") {
            // Gọi API tạo URL thanh toán
            const paymentResponse = await axios.post('/api/payment/create_payment_url', {
                amount: orderResponse.data.amount,
                orderInfo: orderResponse.data.orderInfo
            });
            
            // Chuyển hướng đến trang thanh toán VNPay
            if(paymentResponse.data.url) {
                window.location.href = paymentResponse.data.url;
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }
} 