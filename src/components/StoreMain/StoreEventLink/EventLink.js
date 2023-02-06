import styled from 'styled-components';

const EventLogo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 25px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
  div {
    text-align: center;
    font-size: 12px;
  }
`;

const HotDiv = styled.div`
  position: absolute;
  width: 35%;
  height: 22px;
  color: #fff;
  background-color: rgb(255, 119, 119);

  right: 10px;
  top: -15px;
  line-height: 22px;
  font-size: 8px;
  font-weight: 800;
  border-radius: 10px;
`;

export default function EventLink({ src, name, hot }) {
  return (
    <>
      <EventLogo>
        {hot && <HotDiv>HOT</HotDiv>}
        <img src={src} />
        <div>{name}</div>
      </EventLogo>
    </>
  );
}
