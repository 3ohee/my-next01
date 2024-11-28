import axios from 'axios';
import React, { useState } from 'react';

async function Page({params}) {
    // 한 번에 하지 말자
    const param = await params;
    const id = params.id;
    const[item, setItem] = useState();
    // const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const API_URL = `/makeup/v1/products/${id}.json`;

    try {
        const response = await axios.get(API_URL);
        const item = response.data;
        return <Item item={item}/>
    } catch (error) {
        console.error("error :", error);
        return <div>Error</div>
    }
}

export default Page;