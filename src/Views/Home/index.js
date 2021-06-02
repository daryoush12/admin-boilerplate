import React from 'react'
import styled from 'styled-components'
import { Grid, Column, View } from '@Components/layout'
import { Card } from '@Components/card'
import Avatar from '@Components/avatar'
import Seasons from '@Components/seasons'
import NextEvent from '@Components/nextEvent'
import Progresses from '@Components/progresses'

export default function Home() {
    return (
        <div className="view">
            <div className="view-row">
                <Seasons />
                <NextEvent />
            </div>
            <div className="view-row">
                <Progresses />
            </div>
        </div>
    )
}
