import React from 'react'
import { List, Typography, Divider, Card } from 'antd'
import { Link } from 'react-router-dom'

export default function NextEvent() {
    return (
        <Card className="card">
            <Divider orientation="left">
                Upcoming event in More Season 0.6.8
            </Divider>
            <List>
                <List.Item>
                    <Typography.Text>Puzzle Game</Typography.Text>
                    <Typography.Text>Ends in.. 21:00:05</Typography.Text>
                    <Link>Check answers</Link>
                </List.Item>
            </List>
        </Card>
    )
}
