import React from 'react'
import styled from 'styled-components'
import { Card } from './card'
import { Text } from './text'

const AvatarImage = styled.img`
    border-radius: 100%;
    width: 60%;
    margin: auto;
    display: block;
`

export default function avatar() {
    return (
        <Card>
            <AvatarImage
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                alt="avatar"
            />
            <Text bold centered>
                Jonathan James
            </Text>
        </Card>
    )
}
