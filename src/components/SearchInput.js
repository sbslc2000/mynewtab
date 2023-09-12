import {useState} from "react";
import styled from "styled-components";
import {AiOutlineSearch} from "react-icons/ai";
import {resolveQuery} from "../util/SearchQueryResolver";
import {useTheme} from "../context/ThemeProvider";

const Wrapper = styled.div`

  margin-top: 10px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 24px;
  box-shadow: ${({shadow}) => shadow};
  
  padding-left: 20px;
  padding-right: 20px;
  width: 500px;
  height: 47px;
  background-color: white;
`;

const Input = styled.input`
  height: 47px;
  width: 100%;
  color: black;
  background-color: transparent;
  
    &:focus {
        outline: none;
    }
`;

const SearchInput = () => {
    const [query, setQuery] = useState('');

    const [ThemeMode, toggleTheme] = useTheme();

    let shadow = null;
    if(ThemeMode === "light") {
        //light 모드에서는 검색창에 그림자 효과를 부여
        shadow = "0px 0px 10px rgba(0, 0, 0, 0.3)";
    }

    // 검색어를 입력하면 Google로 이동
    const handleSearch = () => {
        resolveQuery(query);
    };

    // 텍스트가 변경될 때마다 상태를 업데이트
    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    // Enter 키를 누르면 검색
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <Wrapper shadow={shadow}>
            <AiOutlineSearch style={{color:"gray",fontSize:22,marginRight:5}}/>
            <Input
                type="text"
                value={query}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder="검색은 성장의 발판"
            >
            </Input>
        </Wrapper>
    );
}

export default SearchInput;
