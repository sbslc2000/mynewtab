import WidgetFrame from "../WidgetFrame";
import styled from "styled-components";
import WidgetHeader from "../WidgetHeader";


const YoutubeWrapper = styled.div`
  height: 220px;
  width: 100%;
`;


const YoutubeWidget = ({x,y , src}) => {

    return (
        <WidgetFrame x={x} y={y}>
            <WidgetHeader />
            <YoutubeWrapper>
                <iframe width={"100%"} height={"100%"} src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </YoutubeWrapper>

        </WidgetFrame>
    );
}

export default YoutubeWidget;