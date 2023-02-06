import Link from 'next/link';
import styled from 'styled-components';
import EventLink from './EventLink';

const data = {
  href: '/store/event',
};

const StoreEventWrapper = styled.div`
  margin-top: 20px;
  display: flex;

  width: 100%;
  a {
    text-decoration: none;
    color: #000;

    div {
      margin-top: 10px;
    }
  }
`;

export default function StoreEventLink() {
  return (
    <>
      <StoreEventWrapper>
        <Link href={data.href}>
          <a>
            <EventLink
              src="/store-event-logo/1.webp"
              name="시즌빅세일"
              hot={true}
            />
          </a>
        </Link>
        <Link href={data.href}>
          <a>
            <EventLink
              src="/store-event-logo/2.webp"
              name="~93%특가"
              hot={true}
            />
          </a>
        </Link>
        <Link href={data.href}>
          <a>
            <EventLink src="/store-event-logo/3.webp" name="가을테리어" />
          </a>
        </Link>
        <Link href={data.href}>
          <a>
            <EventLink src="/store-event-logo/4.webp" name="오!굿즈" />
          </a>
        </Link>
        <Link href={data.href}>
          <a>
            <EventLink src="/store-event-logo/5.webp" name="빠른배송" />
          </a>
        </Link>
        <Link href={data.href}>
          <a>
            <EventLink src="/store-event-logo/6.webp" name="추석주방템" />
          </a>
        </Link>
        <Link href={data.href}>
          <a>
            <EventLink src="/store-event-logo/7.webp" name="생필품세일" />
          </a>
        </Link>
        <Link href={data.href}>
          <a>
            <EventLink
              src="/store-event-logo/8.webp"
              name="간식특가"
              hot={true}
            />
          </a>
        </Link>
        <Link href={data.href}>
          <a>
            <EventLink src="/store-event-logo/9.webp" name="유아동" />
          </a>
        </Link>
        <Link href={data.href}>
          <a>
            <EventLink src="/store-event-logo/10.webp" name="캠핑용품" />
          </a>
        </Link>
      </StoreEventWrapper>
    </>
  );
}
