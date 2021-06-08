import React from 'react'
import { PageHeader, Card } from 'antd'
import { useHistory } from 'react-router-dom'

export default function PageHead() {
    const history = useHistory()
    const pageName = history.location.pathname.replace('/', '').toUpperCase()
    console.log(pageName)

    return (
        <Card style={{ marginBottom: '2em' }}>
            <PageHeader
                className="site-page-header"
                onBack={() => history.goBack()}
                title={pageName == '' ? 'DASHBOARD' : pageName}
            />
        </Card>
    )
}
