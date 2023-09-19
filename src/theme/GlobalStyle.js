import {createGlobalStyle} from 'styled-components'; // 글로벌 스타일 적용을 도와주는 styled-components내장 메서드
export const GlobalStyle = createGlobalStyle`
	body{
		background-color: ${({theme}) => theme.bgColor};
        color: ${({theme}) => theme.textColor};
		overflow: hidden;

      ::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.linkHover};
        outline: 1px solid ${({theme}) => theme.linkHover};
      }
	}
`;