import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Products = () => {
  return (
    <div className="App"> 
      <Header />
      <div className="container mx-auto py-8 text-center flex-grow">
        {/* Thêm nội dung tùy ý để kiểm tra cuộn trang */}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
