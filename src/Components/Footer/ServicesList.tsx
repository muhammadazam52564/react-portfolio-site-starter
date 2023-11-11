import { List } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';

const ServicesList: React.FC = () => {
    const dataElements = [
        {
            title: 'Web-App Development',
            to: "/"
        },
        {
            title: 'Mobile App Development',
            to: "/"
        },
        {
            title: 'DevOps Services',
            to: "/"
        },
        {
            title: 'UI/UX design services',
            to: "/"
        },
        {
            title: 'SQA & Testing',
            to: "/"
        },
        {
            title: 'Software Project Management',
            to: "/"
        },
        {
            title: 'Dedicated Team',
            to: "/"
        },
        

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

export default ServicesList