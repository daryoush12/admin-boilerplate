import React from 'react'
import { Card, Divider, Typography } from 'antd'

const { Title, Text, Paragraph } = Typography

export default function Season() {
    return (
        <Card className="card">
            <Title>More Season 0.6.8 Details</Title>
            <Divider />
            <div className="InfoGroup">
                <Typography>Name</Typography>
                <Text>Value</Text>
            </div>
            <div className="InfoGroup">
                <Typography>Name</Typography>
                <Text>Value</Text>
            </div>
            <div className="InfoGroup Paragraph">
                <Typography>Name</Typography>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus ac tristique nunc, a sollicitudin lectus. Aliquam
                    tellus nulla, efficitur vel cursus et, sollicitudin eu
                    risus. Suspendisse molestie urna risus, sagittis laoreet
                    orci finibus ut. Sed at consequat ante, eget blandit lorem.
                    Etiam faucibus purus tortor, at suscipit neque sagittis at.
                    Nunc mollis lorem hendrerit, consectetur orci nec, rutrum
                    purus. Fusce ut tempus ex.{' '}
                </Paragraph>
            </div>
        </Card>
    )
}
