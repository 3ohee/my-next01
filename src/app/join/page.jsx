"use client"
import { Avatar, Button, FormControl, Stack, TextField } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

function Page(props) {
    const LOCAL_API_BASE_URL = process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL
    const API_URL = `${LOCAL_API_BASE_URL}/members/join`;
    const router = useRouter();     // useRouter 초기화
    const initUvo =  {
        m_id:"",
        m_pw:"",
        m_name:"",
        m_age:"",
    }; 

    const [uvo, setUvo] = useState(initUvo);

    // function changeUVO(e) {
    //     setUvo({
    //         ...uvo, 
    //         [e.target.name]: e.target.value
    //     })
    // }

    // 모든 입력 필드가 비어있지 않아야 true => 버튼이 활성화
    const isBtnChk = !uvo.m_id || !uvo.m_pw || !uvo.m_name || !uvo.m_age;

    function changeUVO(e) {
        const {name, value} = e.target;
        setUvo(prev =>({
            ...prev, [name]: value
        }));
    }


    function goServer(params) {
        axios.post(API_URL, uvo)
        .then(
            data => {
                if (data.data.success) {
                    console.log(data);
                    alert(data.data);
                } else {
                    alert(data.data.message);
                    setUvo(initUvo); 
                }
        });
    }
    return (
        <div>
            <FormControl autoComplete="off">
                {/* 수직 정렬 */}
                <Stack direction="column" spacing={1} alignItems="center">
                    <Avatar />
                    <TextField type="text" label="아이디" name="m_id" value={uvo.m_id} onChange={changeUVO} />
                    <TextField type="password" label="비밀번호" name="m_pw" value={uvo.m_pw} onChange={changeUVO} />
                    <TextField type="text" label="이름" name="m_name" value={uvo.m_name} onChange={changeUVO} />
                    <TextField type="number" label="나이" name="m_age" value={uvo.m_age} onChange={changeUVO} />
                    <Button fullWidth variant='contained' disabled={isBtnChk} onClick={goServer}>회원가입</Button>
                </Stack>
            </FormControl>
        </div>
    );
}

export default Page;