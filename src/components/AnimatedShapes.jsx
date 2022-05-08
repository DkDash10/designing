import React from 'react'
import styled from 'styled-components'


const Square = styled.div`
    width: 60px;
    height: 60px;
    background-color: #1697c5;
    opacity: 0.7;
    position: absolute;
    top: -60px;
    left: 70px;
    z-index: -2;
    animation: square 15s linear alternate infinite;
    
    @keyframes square {
        to{
            transform : translate(100vw, 90vh);
        }
    }
`
const Circle = styled.div`
    width: 60px;
    height: 30px;
    border-radius: 70%;
    background-color: #61d5ff;
    opacity: 0.7;
    position: absolute;
    top: 220px;
    left: -10px;
    z-index: -2;
    animation: circle 10s linear alternate infinite;
    
    @keyframes circle {
        to{
            transform : translate(100vw, 30vh);
        }
    }
`
const Rectangle = styled.div`
    width: 60px;
    height: 30px;
    /* border-radius: 70%; */
    background-color: #42c574;
    opacity: 0.7;
    position: absolute;
    top: 400px;
    left: -10px;
    z-index: -2;
    animation: rect 5s linear alternate infinite;
    
    @keyframes rect {
        to{
            transform : translate(100vw, 10vh);
        }
    }
`
const TRect = styled.div`
    width: 30px;
    height: 60px;
    /* border-radius: 70%; */
    background-color: #df7676;
    opacity: 0.7;
    position: absolute;
    top: 300px;
    left: -80px;
    z-index: -2;
    animation: rect 7s linear alternate infinite;
    
    @keyframes rect {
        to{
            transform : translate(100vw, 10vh);
        }
    }
`
const ORect = styled.div`
    width: 30px;
    height: 60px;
    border-radius: 70%;
    background-color: #e1e773;
    opacity: 0.7;
    position: absolute;
    top: -90px;
    left: 80px;
    z-index: -2;
    animation: rect 10s linear alternate infinite;
    
    @keyframes rect {
        to{
            transform : translate(100vw, 50vh);
        }
    }
`





const AnimatedShapes = () => {
  return (
  <>
    <Square></Square>
    <Circle></Circle>
<Rectangle></Rectangle>
<TRect>
</TRect>
<ORect>

</ORect>

  </>
  )
}

export default AnimatedShapes