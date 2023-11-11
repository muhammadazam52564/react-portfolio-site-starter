import { List } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';

const Industries: React.FC = () => {
    const dataElements = [
        {
            title: 'Education',
            to: "/"
        },
        {
            title: 'Real Estate',
            to: "/"
        },
        {
            title: 'Fintech',
            to: "/"
        },
        {
            title: 'Health Care',
            to: "/"
        },
        {
            title: 'Logistics',
            to: "/"
        },
        {
            title: 'eCommerce',
            to: "/"
        }
    ]
    const linkColor = {
        color: "#b3c5d9"
    }
    return (
        <>
        <List
            bordered={false} 
            dataSource={dataElements} 
            renderItem={(item) => (
                <List.Item>
                    <Link to={item.to} style={linkColor}>{ item.title }</Link> 
                </List.Item>
                )
            }
        />
        </>
    )
}

export default Industries