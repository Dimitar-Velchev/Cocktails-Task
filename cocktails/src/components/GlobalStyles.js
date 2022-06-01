import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
&::-webkit-scrollbar-thumb{
    background-color: darkgray;
}

}
body{
    font-family: 'Montserrat', sans-serif;
    width: 100%;  
}

h3{
    font-size: 1.2rem;
    padding: 1.5rem 0rem;
}
p{
    font-size: 1.2rem;
    line-height: 160%;
    font-size: 0.8rem;
    margin: 1rem;
}
a{
    text-decoration: none;
}
img{
    display: block;
}
`;

export default GlobalStyles;
