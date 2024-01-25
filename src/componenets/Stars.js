import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import { AiOutlineStar } from "react-icons/ai"
import styled from "styled-components"

const Stars = ({ ratings }) => {

    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;

        return (
            <span>
                {ratings >= index + 1
                    ? <FaStar className='icon' />
                    : ratings >= number
                        ? <FaStarHalfAlt className='icon' />
                        : <AiOutlineStar className='empty-icon' />}
            </span>
        )
    });

    return (
        <Wrapper>
            <div className="icon-style">
                {ratingStar}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .icon-style {
        display : flex ;
        gap: 0.2rem ;
        margin-top: 0.5rem ;
        align-items : center ;
        justify-content : flex-start ;
    }

    .icon {
        font-size : 1.5rem ;
        color : orange ;
    }

    .empty-icon {
        font-size : 1.8rem ;
        margin-top: 0.25rem ;
        color : orange ;
    }

    p{
        margin: 0 ;
        padding-left : 1.2 rem ;
    }
`

export default Stars ;