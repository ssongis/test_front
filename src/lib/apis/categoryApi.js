import axios from 'axios';

const URL = '/api';

export const getCategory = async categoryId => {
  await axios.get(`${URL}/store/api/v1/category/${categoryId}`);
};

export const furnitureList = [
  {
    id: 1,
    category: '침대',
    carousel: { isActive: true, src: '' },
    banner: { isActive: true, src: '' },
    breadcrumb: '가구 > 침대',
    hash: '20_22_20_20',
    list: [
      {
        id: 2,
        category: '침대프레임',
        carousel: { isActive: true, src: '' },
        banner: { isActive: true, src: '' },
        breadcrumb: '가구 > 침대 > 침대프레임',
        hash: '20_22_20_20',
        list: [
          {
            id: 3,
            category: '일반침대',
            carousel: { isActive: true, src: '' },
            banner: { isActive: false, src: '' },
            breadcrumb: '가구 > 침대 > 침대프레임 > 일반침대',
            filter: [
              {
                name: 'bedsize',
                value: ['MS', 'S', 'SS', 'D', 'Q', 'K', 'LK', 'CK'],
              },
              { name: 'bedcolor', value: ['RED', 'BLUE', 'WHITE'] },
            ],
            hash: '20_22_20_20',
          },
          {
            id: 4,
            category: '수납침대',
            carousel: { isActive: false, src: '' },
            banner: { isActive: true, src: '' },
            breadcrumb: '가구 > 침대 > 침대프레임 > 일반침대',
            filter: [
              {
                name: 'material',
                value: ['WOOD', 'STEEL', 'FAKE_LATHER', 'FAKE_WOOD'],
              },
            ],
            hash: '20_22_20_21',
          },
          {
            id: 5,
            category: '저상형침대',
            carousel: { isActive: false, src: '' },
            banner: { isActive: false, src: '' },
            breadcrumb: '가구 > 침대 > 침대프레임 > 일반침대',
            hash: '20_22_20_22',
          },
        ],
      },
      {
        id: 6,
        category: '침대+매트리스',
        carousel: { isActive: false, src: '' },
        banner: { isActive: false, src: '' },
        breadcrumb: '가구 > 침대 > 침대+매트리스',
        list: [
          {
            id: 7,
            category: '일반침대',
            carousel: { isActive: false, src: '' },
            banner: { isActive: false, src: '' },
            breadcrumb: '가구 > 침대 > 침대+매트리스 > 일반침대',
          },
          {
            id: 8,
            category: '수납침대',
            carousel: { isActive: false, src: '' },
            banner: { isActive: false, src: '' },
            breadcrumb: '가구 > 침대 > 침대+매트리스 > 수납침대',
          },
          {
            id: 9,
            category: '저상형침대',
            carousel: { isActive: false, src: '' },
            banner: { isActive: false, src: '' },
            breadcrumb: '가구 > 침대 > 침대+매트리스 > 수납침대',
          },
        ],
      },
    ],
  },
  {
    id: 10,
    category: '매트리스/토퍼',
    list: [
      {
        id: 11,
        category: '매트리스',
        list: [
          { id: 43, category: '스프링매트리스' },
          { id: 44, category: '라텍스매트리스' },
          { id: 45, category: '폼매트리스' },
        ],
      },
      { id: 12, category: '토퍼', list: [] },
    ],
  },
  {
    id: 13,
    category: '소파',
    list: [
      { id: 14, category: '일반소파', list: [] },
      { id: 15, category: '리클라이너', list: [] },
    ],
  },
];

export const fabricList = [
  { id: 16, category: '침구세트', list: [] },
  {
    id: 17,
    category: '커튼/부자재',
    list: [
      { id: 18, category: '암막커튼', list: [] },
      { id: 19, category: '일반커튼', list: [] },
      { id: 20, category: '레이스/속커튼', list: [] },
      { id: 21, category: '가리개커튼', list: [] },
    ],
  },
  {
    id: 22,
    category: '러그/카페트',
    list: [
      { id: 23, category: '극세사/단모러그', list: [] },
      { id: 24, category: '사이잘록러그', list: [] },
      { id: 25, category: '샤기러그', list: [] },
    ],
  },
];

export const lightList = [
  {
    id: 26,
    category: '공간별조명',
    list: [
      {
        id: 27,
        category: '거실조명',
        list: [
          { id: 28, category: '샹들리에' },
          { id: 29, category: '직부조명' },
          { id: 30, category: 'LED거실등' },
        ],
      },
      {
        id: 31,
        category: '방조명',
        list: [
          { id: 32, category: '직부조명' },
          { id: 33, category: 'LED방등' },
        ],
      },
      {
        id: 34,
        category: '주방조명',
        list: [
          { id: 35, category: '레일조명' },
          { id: 36, category: '펜던트조명' },
        ],
      },
    ],
  },
  {
    id: 37,
    category: '천장등',
    list: [
      { id: 38, category: '직부조명', list: [] },
      { id: 39, category: '팬던트조명', list: [] },
      { id: 40, category: '센서등', list: [] },
      { id: 41, category: '레일조명', list: [] },
    ],
  },
  { id: 42, category: '장스탠드', list: [] },
];
