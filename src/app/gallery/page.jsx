import Image from 'next/image';
import React from 'react';

function page(props) {
    return (
        <table>
            <tbody>
                <tr>
                    <td><Image src="/images/tree-1.jpg" width={100} height={100} ></Image></td>
                    <td><Image src="/images/tree-2.jpg"  width={100} height={100} ></Image></td>
                    <td><Image src="/images/tree-3.jpg"  width={100} height={100}></Image></td>
                </tr>
                <tr>
                    <td><Image src="/images/tree-4.jpg"  width={100} height={100}></Image></td>
                    <td><Image src="/images/coffee-blue.jpg"  width={100} height={100}></Image></td>
                    <td><Image src="/images/bear.jpg"  width={100} height={100}></Image></td>
                </tr>
            </tbody>

        </table>
    );
}

export default page;