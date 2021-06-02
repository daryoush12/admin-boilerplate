import React from 'react'
import { Progress, Typography, Divider, Card } from 'antd'
import { Link } from 'react-router-dom'

export default function Progresses() {
    return (
        <Card className="card">
            <Typography>Progress</Typography>
            <Divider />
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={70} status="exception" />
            <Progress percent={100} />
            <Progress percent={50} showInfo={false} />
        </Card>
    )
}
