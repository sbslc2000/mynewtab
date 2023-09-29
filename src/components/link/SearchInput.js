import {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {AiOutlineSearch} from "react-icons/ai";
import {resolveQuery} from "../../util/SearchQueryResolver";
import {useTheme} from "../../context/ThemeProvider";

const Wrapper = styled.div`

  margin-top: 10px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 24px;
  box-shadow: ${(props) => props.shadow};
  
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
        setQuery("");
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

    const inputRef = useRef(null); // input 요소에 대한 참조를 생성

    // ... (나머지 상태 및 로직은 생략)

    // Command + S를 눌렀을 때 input에 focus 주는 로직
    useEffect(() => {
        const handleFocusInput = (e) => {
            if ((e.metaKey && e.key === 's') || (e.ctrlKey && e.key === 's')) {
                e.preventDefault(); // 기본 동작(보통 저장 동작)을 막음
                inputRef.current.focus(); // input에 focus를 줌
            }
        };

        // 이벤트 리스너 등록
        window.addEventListener('keydown', handleFocusInput);

        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
            window.removeEventListener('keydown', handleFocusInput);
        };
    }, []);

    return (
        <Wrapper shadow={shadow}>
            <AiOutlineSearch style={{color:"gray",fontSize:22,marginRight:5}}/>
            <Input
                ref={inputRef}
                type="text"
                value={query}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder="검색은 성장의 발판 (⌘ + S)"
            >
            </Input>
        </Wrapper>
    );
}

export default SearchInput;
