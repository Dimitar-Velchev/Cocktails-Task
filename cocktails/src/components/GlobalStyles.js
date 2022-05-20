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
h2{
    font-size: 3rem;
    font-family: 'Abril Fatface', cursive;
    font-weight: lighter;

}
h3{
    font-size: 1.3rem;
    padding: 1.5rem 0rem;
}
p{
    font-size: 1.2rem;
    line-height: 200%;
}
a{
    text-decoration: none;
}
img{
    display: block;
}

input{
    font-weight: bold;
    font-family: "Montserrat",sans-serif;
    cursor: pointer;
}


button{
    font-size: 1rem;
      color: rgb(0,160,130);
      background: white;
      border-color: rgb(255, 194, 68);
      padding: 0.5rem;
      border-radius: 1rem;
      font-weight: 400;
      cursor: pointer;
}

button:hover {
        border: 2px solid rgb(68, 0, 99);
        font-weight: 600;
        color: rgb(255, 194, 68);
      }

`;

export default GlobalStyles;