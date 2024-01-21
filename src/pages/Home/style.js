import { styled } from "styled-components";

export const Container = styled.div`
    h1{
        margin: 4rem 2rem 3rem 4rem;
    }

    footer{
        margin: 4rem;
        text-align: center;
        color: #fff;
      
      }
      
      footer p{
        margin: 2rem;
        font-size: 1.2rem;
        font-weight: bold;
        
      
      }
      
      footer h1{
        font-size: 1rem;
        margin: 1.3rem;
        font-weight: 100;
      }

`

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    width: 94%;
    margin: 0 auto;
    row-gap: 4rem;
`

export const Movie = styled.li`
    transition: all 0.3s;

    a{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    img{
        width: 180px;
        margin-bottom: 2rem;
        margin-top: 3rem;
    }
    
    span{
        font-weight: bold; 
        font-size: 100%;
        align-items: center;
        justify-content: center;
        display: flex;
        text-align: center;
        margin-bottom: 8px;
    }
    
    a:hover{
        transform: scale(1.1);
    }

    .ReleaseDate {
        color: rgba(232, 74, 95, 0.75);
        font-size: 0.8rem;
        margin-top: 5px;
    }

    .linhaFilme{
        width: 4rem;
        margin: 0 auto;
        align-items: center;
        height: 0.2rem;
        background-color: rgba(232, 74, 95, 0.75);
        border-radius: 1rem;
        border: none;

    }
`

export const SVGContainer = styled.svg`
    margin: 0 auto;
    display: block;
`;

export const ContainerBaneer = styled.div`

nav{
 
    position: absolute;
    margin: 2% 4% 0 4%;
    display: flex;
    width: 100%;
    font-size: 1.5em;
 
}
 
.name{
 
    width: 30%;
    font-weight: bold;
    letter-spacing: 2px;
 
}
 
.topics{
 
    width: 70%;
    display: flex;
 
}
 
li{
 
    display: inline-block;
    margin: 0 1.5em;
    font-weight: bold;
    cursor: pointer;
    font-size: 1.2rem;
    transition: 0.25s ease;
 
}

li:hover{

    box-shadow: 0 2.5px 0 0 currentColor;
    
}
  

ul{
    margin-left: 8rem
}
 

.icone {

    margin: 0 2rem;
    display: flex;
    align-items: center;
    
        > svg:not(:last-child) {
            margin-right: 2.5rem;
    }
}
 
 
.banner{
 
    width: 100%;
 
}
 
.banner img{
 
    width: 100%;
 
}
 
.info-text{
 
    position: absolute;
    top: 43%;
    margin-left: 4%;
    max-width: 100%;
   
}
 
.info-text p{
 
    width: 40%;
    margin-top: 1.5%;
    font-size: 1.1rem;
    font-weight: 400;
 
}
 
.buttons{
 
    display: flex;
    max-width: 40%;
    margin-top: 2%;
 
}
 
.red-btn {

    margin-right: 5%;
    background-color: rgba(232, 74, 95, 0.75);
    text-align: center;
    font-size: 1.2em;
    cursor: pointer;
    border-radius: 10px;
    padding: 3% 8%;
    transition: all 0.3s;
    align-items: center;
    display: flex;
}

.red-btn:hover {

    background-color: rgb(255 127 144 / 75%);
    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25);

}

.gray-btn {

    background-color: rgba(42, 54, 59, 0.75);
    text-align: center;
    font-size: 1.2em;
    cursor: pointer;
    border-radius: 10px;
    padding: 3% 8%;
    border: 2px solid transparent; 

}

.gray-btn:hover {

    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: 2px solid #fff; /* Mudando a cor da borda ao passar o mouse */

}

`
