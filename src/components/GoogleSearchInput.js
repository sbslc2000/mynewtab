import {useState} from "react";
import styled from "styled-components";
import {AiOutlineSearch} from "react-icons/ai";

const Wrapper = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 24px;
  
  padding-left: 20px;
  width: 500px;
  height: 47px;
  background-color: white;
`;

const Input = styled.input`
  height: 47px;
  color: black;
  background-color: transparent;
  
    &:focus {
        outline: none;
    }
`;

const GoogleSearchInput = () => {
    const [query, setQuery] = useState('');

    // 검색어를 입력하면 Google로 이동
    const handleSearch = () => {
        window.open(`https://www.google.com/search?q=${query}`, '_blank');
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
        <Wrapper>
            <AiOutlineSearch style={{color:"gray",fontSize:22,marginRight:5}}/>
            <Input
                type="text"
                value={query}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder="Google 검색"
            >
            </Input>
        </Wrapper>
    );
}

export default GoogleSearchInput;
