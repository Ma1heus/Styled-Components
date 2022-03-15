import React, { Component } from "react";
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: aquamarine;
  min-height: 100vh;
`

const Numbers = styled.div`
  margin-top: 35px;
`

const Legenda = styled.div`
display:flex;
  justify-content: space-around;
`

const Operadores = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  `

const Button = styled.button`
  width: 5vw;
  height: 3vw;
  color: blue;
  font-size: 1.5vw;
`

const Tittle = styled.h1`
  color: red;
`

export default class calc extends Component {
  state = {
    num1: null,
    num2: null,
    res: 0
  };

  soma = () => {
    let { num1, num2 } = this.state;
    if (num1 && num2 !== null) {
      this.setState({
        res: num1 + num2
      });
    }
  };

  sub = () => {
    let { num1, num2 } = this.state;
    if (num1 && num2 !== null) {
      this.setState({
        res: num1 - num2
      });
    }
  };

  mult = () => {
    let { num1, num2 } = this.state;
    if (num1 && num2 !== null) {
      this.setState({
        res: num1 * num2
      });
    }
  };

  div = () => {
    let { num1, num2 } = this.state;
    if (num2 === 0 && num1 !== 0) {
      this.setState({
        res: "Divisão por zero"
      });
    } else if (num1 && num2 !== null) {
      this.setState({
        res: num1 / num2
      });
    }
  };

  clear = () => {
    let { num1, num2 } = this.state;
    if (num1 && num2 !== "") {
      this.setState({
        num1: 0,
        num2: 0,
        res: 0
      });
    } else {
      this.setState({
        res: 0
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      num1: Number(event.target.value)
    });
  };

  handleChange1 = (event) => {
    this.setState({
      num2: Number(event.target.value)
    });
  };

  render() {
    let { num1, num2, res } = this.state;
    return (
      <Container>
      <GlobalStyle/>
        <Tittle>{res}</Tittle>
        <Numbers>
          <Legenda>
            <p>Primeiro Número</p>
            <p>Segundo Número</p>
          </Legenda>
          <input type="number" value={num1} onChange={this.handleChange} />
          <input type="number" value={num2} onChange={this.handleChange1} />
        </Numbers>
        <Operadores>
          <Button onClick={this.soma}> + </Button>
          <Button onClick={this.sub}> - </Button>
          <Button onClick={this.mult}> * </Button>
          <Button onClick={this.div}> / </Button>
          <Button onClick={this.clear}> Limpar </Button>
        </Operadores>
      </Container>
    )
  }
}
