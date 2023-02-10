import React from 'react'
import { MainBlock } from '@/components/CommunityMain/main.styles'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'
import BoardWriting from '@/components/Board/BoardWriting'

function Board() {
    return(
        <MainBlock>
            <Header/>
            <BoardWriting/>
            {/* <BoardList/> */}
            <Footer/>
        </MainBlock>
    )
}



export default Board