import React from 'react'
import { MainBlock } from '@/components/CommunityMain/main.styles'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'
import BoardList from '@/components/Board/BoardList'

function BoardLists() {
    return(
        <MainBlock>
            <Header/>
            <BoardList/>
            <Footer/>
        </MainBlock>
    )
}

export default BoardLists;