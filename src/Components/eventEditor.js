import React from 'react'
import { Timeline, Button, Card, Divider, Typography } from 'antd'
import { PlusCircleFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const { Item } = Timeline
const { Title } = Typography

export default function eventEditor() {
    return (
        <Card className="card">
            <Title>More Season 0.6.8 Timeline</Title>
            <Divider />
            <Timeline mode="alternate">
                <Item>
                    22.4 21.00 Season Starts{' '}
                    <Link to="/events/event">View</Link>
                </Item>
                <Item>
                    22.4 21.00 Season Starts{' '}
                    <Link to="/events/event">View</Link>
                </Item>
                <Item>
                    22.4 21.00 Season Starts{' '}
                    <Link to="/events/event">View</Link>
                </Item>
                <Item
                    dot={<Button shape="circle" icon={<PlusCircleFilled />} />}
                />
            </Timeline>
        </Card>
    )
}
