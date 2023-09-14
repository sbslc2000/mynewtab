import styled from "styled-components";
import {useDraggable} from "@dnd-kit/core";

const Wrapper = styled.div`
  position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  width: 400px;
  height: 250px;
  background-color: white;
    border-radius: 10px;
  z-index: 1;
`;
const WidgetFrame = (props) => {

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: 'draggable',
    });

    //console.log(transform);
    const x = props.x;
    const y = props.y;


    // transform 값에 제한을 둠


    /*
    const style = transform ? {
        transform: `translate3d(${limitedX}px, ${limitedY}px, 0)`,
    } : undefined;

     */


    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;


    return (
        <Wrapper x={x} y={y} ref={setNodeRef} {...listeners} {...attributes} style={style}>
            {props.children}
        </Wrapper>
    );
}

export default WidgetFrame;