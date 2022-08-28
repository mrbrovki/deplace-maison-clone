import { useContext } from 'react';
import { Context } from '../../context';
import styled, {css, keyframes} from 'styled-components';
import { Visibility } from '../../lib/Types';

const fromTop = keyframes`
  0%{
    top: -100%;
  }
  25%{
    top: -80%
  }
  100%{
    top: 0;
  }
`;
const fromBottom = keyframes`
  0%{
    top: 100%;
  }
  25%{
    top: 80%
  }
  100%{
    top: 0;
  }
`;
const toTop = keyframes`
  0%{
    top: 0
  }
  25%{
    top: -20%;
  }
  100%{
    top: -100%;
  }
`;
const toBottom = keyframes`
  0%{
    top: 0
  }
  25%{
    top: 20%;
  }
  100%{
    top: 100%;
  }
`;
const StyledTransition = styled.div`
  position: fixed;
  z-index: 20;
  width: 100%;
  height: 100%;
  background-color: black;
`;
const HomeTransition = styled(StyledTransition)`
  ${(props:{visibility:Visibility}) => {
    switch(props.visibility){
      case 'shown':
        return css`
          top: 0;
        `;
      case 'hidden':
        return css`
          animation: ${toTop} 1s forwards;
        `;
    }
  }}
`;
const NavTransition = styled(StyledTransition)`
  ${(props:{visibility:Visibility}) => {
    switch(props.visibility){
      case 'shown':
        return css`
          animation: ${fromTop} 1s forwards;
        `;
      case 'hidden':
        return css`
          animation: ${toTop} 1s forwards;
        `;
    }
  }}
`;
const LoadTransition = styled(StyledTransition)`
  ${(props:{visibility:Visibility}) => {
    switch(props.visibility){
      case 'shown':
        return css`
          animation: ${fromBottom} 1s forwards;
        `;
      case 'hidden':
        return css`
          animation: ${toTop} 1s forwards;
        `;
    }
  }}
`;
const Transition = () => {
  const {state:{transition}} = useContext(Context);
  switch(transition.transitionType){
    case 'HOME':
      return(
        <HomeTransition visibility={transition.visibility}>
        </HomeTransition>
      );
    case 'NAVIGATION':
      return(
        <NavTransition visibility={transition.visibility}>
        </NavTransition>
      );
    case 'LOADING':
        return(
          <LoadTransition visibility={transition.visibility}>
          </LoadTransition>
        );
    default:
      return(<></>);
  }
}

export default Transition;