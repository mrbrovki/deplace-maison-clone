import { FC, ReactElement, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

interface Coords{
  x: number;
  y: number;
};

interface DotProps{
  coords: Coords;
  id: number;
};

let bigDot = 35;
let smallDot = 5;
let amount = 30;
let xDot = (bigDot - smallDot) / amount;
let duration = 0.004;

const Dot = styled.span.attrs((props:DotProps) => ({style:{
  top: props.coords.y - (bigDot - (props.id * xDot)) / 2,
  left: props.coords.x - (bigDot - (props.id * xDot)) / 2,
}}))`
  position: fixed;
  transition: all ${(props: DotProps) => props.id * duration}s ease-out;
  width: ${(props: DotProps) => bigDot - (props.id * xDot)}px;
  height: ${(props: DotProps) => bigDot - (props.id * xDot)}px;
  border-radius: 20px;
  pointer-events: none;
  background-color: white;
  `;

const StyledCursor = styled.span`
  mix-blend-mode: difference;
  position: fixed;
  z-index: 1000;
  `;

const Cursor:FC = () => {
  const dots:ReactElement<DotProps>[] = [];
  const [coords, setCoords] = useState<Coords>({x: 0, y: 0});
  
  const mouseMoveEvent = useCallback((e:MouseEvent) => {
    setCoords({x: e.clientX, y: e.clientY});
  }, []);
  
  useEffect(()=>{
    document.addEventListener('mousemove', mouseMoveEvent);
  }, []);
  
  for(let i = 0; i < amount; i++){
    dots.push(<Dot coords={coords} id={i} key={i}/>);
  }
  
  return (
    <StyledCursor>
      {dots}
    </StyledCursor>
  )
}

export default Cursor;