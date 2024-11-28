// / 이거 수정
// import Detail from '@app/';

import axios from 'axios';

async function Page({ params }) {
    const param = params;
    const gb_idx = param.gb_idx;
    // const [data, setData] = useState([]);
    const API_URL =`http://localhost:8080/api/guestbook/detail?gb_idx=${gb_idx}`

    try {
        const response = await axios.get(API_URL);
        const item = response.data;
        return <Detail item={item}/>
    } catch (error) {
        console.error("error :", error);
        return <div>Errora. </div>
    }
}

export default Page;