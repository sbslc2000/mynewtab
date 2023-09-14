import styled from "styled-components";
import PlayListCategoryList from "../components/playlist/PlayListCategoryList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  flex-grow: 1;
  
  flex-shrink : 0;
`;
const PlayListPage = () => {
    return (
        <Wrapper>
            <div>
                <div style={{textAlign:"center"}}>오늘은 어떤 노래가 듣고 싶으신가요?(Beta)</div>
                <PlayListCategoryList/>
            </div>

        </Wrapper>
    );
}

export default PlayListPage;