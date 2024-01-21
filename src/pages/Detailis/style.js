import styled from "styled-components";

// Estilização do Cabeçalho
export const Cabeca = styled.div`
*{

}
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
  margin: 0 2rem;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
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
`;

// Estilização do Container
export const Container = styled.div`

.fundo{
 
  width: 100%;

}

.fundo img{

  width: 100%;

}

.info-movie{
  position: absolute;
  margin-left: 4%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 25%;

}

.info-movie img{

  width: 275px;

}

.details{
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
}

.details h1{

  margin: 2rem 0;
  font-weight: 800;
  font-size: 2.5rem;


}

.resumo{
  
  font-weight: 100;
  width: 70%;
  font-size: 1.1rem;


}

.linhaFilme{
  width: 4rem;
  align-items: center;
  margin: 1rem 0;
  height: 0.2rem;
  background-color: rgba(232, 74, 95, 0.75);
  border-radius: 1rem;
  border: none;

}

.ReleaseDate{
  font-weight: 700;
  color: rgba(232, 74, 95, 0.75);

}


.btn{
  display: flex;
  max-width: 40%;
  margin-top: 4%;

}

.btn-goback{
  background-color: rgba(232, 74, 95, 0.75);
  cursor: pointer;
  text-align: center;
  font-size: 1.2em;
  border-radius: 10px;
  padding: 10% 9%;
  border: none;
  color: #fff;
  width: 7rem;
  transition: all 0.3s;
  font-weight: bold;
}

.btn-goback:hover {

  background-color: rgb(255 127 144 / 75%);
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25);

}

.btn-assistir{
  margin-left: 3%;
  cursor: pointer;
  background-color: rgba(42, 54, 59, 0.75);
  text-align: center;
  font-size: 1.2em;
  border-radius: 10px;
  padding: 3% 8%;
  color: #fff;
  transition: all 0.3s;
  font-weight: bold;
  border: none;
  border: 2px solid transparent; 


}

.btn-assistir:hover {

  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: 2px solid #fff; /* Mudando a cor da borda ao passar o mouse */

}
`;
