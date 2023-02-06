import styled from 'styled-components';

export const AddWrapper = styled.div`
  padding: 30px 10px;
  width: 1256px;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AddContainer = styled.div``;

export const AddH2 = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

export const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  label {
    position: absolute;
    font-weight: 400;
    font-size: 14px;
    margin-top: 10px;
    line-height: 40px;
  }
  input {
    margin-left: 400px;
    margin-top: 10px;
    width: 300px;
    height: 40px;
    font-size: 16px;
    border: 1px solid #c2c8cc;
    border-radius: 5px;
  }
  button {
    width: 200px;
    margin-top: 20px;
    margin-bottom: 5px;
    padding: 12px 20px;
    background-color: var(--base-color-blue);
    border: none;
    border-radius: 5px;
    color: #fff;
  }
`;

export const SubjectWrapper = styled.h3`
  font-weight: 900;
  font-size: 20px;
  margin: 15px 0px;
`;
