import { Flex } from 'components/Box'
import Text from 'components/Text'
import { IQuote } from 'interfaces/IQuote'
import React, { useState } from 'react'
import {useGetSlippageTolerancestate, useSetSlippageTolerancestate } from 'state/hooks'
import { QuoteState } from 'state/types'
import styled from 'styled-components'


interface ISettingSlippageProps {
    onDismiss?: () => void;
}

const slippageConstant: number[] = [0.1, 0.5, 1, 3]
const SettingSlippage: React.FC<ISettingSlippageProps> = (props) => {
    const slippageValue=useGetSlippageTolerancestate();
    const [slippage, setSlippage] = useState(slippageValue||0.1);
    const {setSlippageToleranceState} = useSetSlippageTolerancestate();

    return (
        <StyledSettingSlippage>
            <Text
                text={`Slippage tolerance`}
                classes={"heading-text text-center"}
                weight={400}
                color={'#fff'}
            >
            </Text>
            <Flex className={'d-flex justify-content-between align-item-center my-3 mb-4'}>
                {slippageConstant.map((item, index) => (
                    <Flex key={index} className={'slippage-box ' + (item === slippage ? 'selected' : '')} onClick={() => {
                        setSlippage(item)
                        setSlippageToleranceState({slippageTolerance:item})
                    }}>
                        <Text
                            text={`${item}%`}
                            classes={"box-text line-height-20 text-center"}
                            weight={400}
                            color={'#fff'}
                        >
                        </Text>
                    </Flex>
                ))}
            </Flex>
        </StyledSettingSlippage>
    )
}

export default SettingSlippage

const StyledSettingSlippage = styled.section`
.slippage-box{
    border : 1px solid #1903cb;
    border-radius : 9px;
    padding:10px;
    margin :5px;
    width : 70px;
    cursor: pointer;
    &.selected{
        background : #1903cb;
    }
    .box-text{
        color: white;
        font-size : 16px;
    }
}
.heading-text{
    font-size : 18px;
    font-weight: 500;
}
`
