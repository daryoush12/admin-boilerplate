import React from 'react'
import styled from 'styled-components'
import { Grid, Column, View } from '@Components/layout'
import { Card } from '@Components/card'
import Avatar from '@Components/avatar'

export default function Home() {
    return (
        <View>
            <Grid>
                <Column width={20}>One :D</Column>
                <Column width={60}>
                    <Card>Wow</Card>
                </Column>
                <Column width={20}>
                    <Avatar />
                </Column>
            </Grid>
        </View>
    )
}
