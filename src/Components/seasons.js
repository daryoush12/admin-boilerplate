import React from 'react'
import { List, Typography, Divider, Card } from 'antd'
import { Link } from 'react-router-dom'

export default function Seasons() {
    return (
        <Card className="card">
            <Divider orientation="left">Your Events</Divider>
            <List>
                <List.Item>
                    <Typography.Text>More Season 0.6.8</Typography.Text>
                    <Link to="edit">Edit</Link>
                </List.Item>
            </List>
        </Card>
    )
}
