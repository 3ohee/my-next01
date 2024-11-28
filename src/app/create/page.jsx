import Image from 'next/image';
import React from 'react';

function page(props) {
    return (
        <>
            <h2>자식 페이지 ~~ Creat !!</h2>
            <p><Image src="/images/coffee-blue.jpg" width={100} height={100}></Image></p>
        
        </>

    );
}

export default page;