import styled from "styled-components";

const StyledGroup = styled.div`
  margin-top: 20px;
  background-color: white;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 700px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;
const SubHeader = styled.h2`
  padding: 20px;
  font-size: 32px;
  margin: 0;
`;

export { StyledGroup, Wrapper, SubHeader };
