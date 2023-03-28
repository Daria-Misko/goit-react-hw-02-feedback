import styled from 'styled-components';

const Button = styled.button`
  padding-top: 50px;
  text-transform: capitalize;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 22px;
  text-decoration: none;
  margin: 20px 20px 20px 0;
  color: #fff;
  position: relative;
  display: inline-block;
  cursor: pointer;
  background-color: #55acee;
  box-shadow: 0px 5px 0px 0px #3c93d5;
  transition: 500ms;

  :hover,
  :focus {
    background-color: #6fc6ff;
  }

  :active {
    transform: translate(0px, 5px);
    -webkit-transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
  }
`;

export { Button };
