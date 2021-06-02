import React from 'react'
import { useHistory } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import { HomeFilled } from '@ant-design/icons'

export default function CurrentPath() {
    const history = useHistory()
    const paths = history.location.pathname.split('/').slice(1)

    console.log(history)
    console.log(paths)
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>
                <Link to="/">
                    <HomeFilled />
                </Link>
            </Breadcrumb.Item>
            {paths.length > 0 &&
                paths.map((path, index) => (
                    <Breadcrumb.Item key={index}>{path}</Breadcrumb.Item>
                ))}
        </Breadcrumb>
    )
}
