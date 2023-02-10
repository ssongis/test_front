import React from 'react'
import { MainBlock } from '@/components/CommunityMain/main.styles'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'
import BoardView from '@/components/Board/BoardView'

function BoardViews() {
    return(
        <MainBlock>
            <Header/>
            <BoardView/>
            <Footer/>
        </MainBlock>
    )
}

export default BoardViews;