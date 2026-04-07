// In a real Vercel deployment, this would use fetch() to parse a public Google Sheet CSV URL
// e.g., fetch(`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`)
// For this prototype, we simulate the data structure that would be returned.

export const fetchTrackingData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 'TRK-20260401-01',
          itemName: '프리미엄 무선 헤드폰',
          packUnit: 'BOX (10ea)',
          orderQty: 50,
          transportMethod: '항공 (Air)',
          estDispatch: '2026-04-05',
          actualDispatch: '2026-04-05',
          ETD: '2026-04-06',
          ETA: '2026-04-08',
          estReceiving: '2026-04-09',
          salesRep: '김영업',
          client: '테크트로닉스',
          status: 'In Transit'
        },
        {
          id: 'TRK-20260401-02',
          itemName: '게이밍 기계식 키보드',
          packUnit: 'PALLET (100ea)',
          orderQty: 20,
          transportMethod: '해운 (Sea)',
          estDispatch: '2026-04-02',
          actualDispatch: '2026-04-03',
          ETD: '2026-04-07',
          ETA: '2026-04-20',
          estReceiving: '2026-04-22',
          salesRep: '이물류',
          client: '나이스리테일',
          status: 'Delayed'
        },
        {
          id: 'TRK-20260402-01',
          itemName: '고속 충전 어댑터 65W',
          packUnit: 'BOX (50ea)',
          orderQty: 200,
          transportMethod: '항공 (Air)',
          estDispatch: '2026-04-07',
          actualDispatch: '',
          ETD: '2026-04-08',
          ETA: '2026-04-10',
          estReceiving: '2026-04-10',
          salesRep: '박담당',
          client: '모바일플러스',
          status: 'Preparing'
        },
        {
          id: 'TRK-20260328-01',
          itemName: '노이즈캔슬링 이어폰',
          packUnit: 'BOX (20ea)',
          orderQty: 30,
          transportMethod: '육로 (Truck)',
          estDispatch: '2026-03-29',
          actualDispatch: '2026-03-29',
          ETD: '2026-03-29',
          ETA: '2026-03-31',
          estReceiving: '2026-03-31',
          salesRep: '김영업',
          client: '사운드맥스',
          status: 'Completed'
        },
        {
          id: 'TRK-20260403-02',
          itemName: '4K 웹캠 V2',
          packUnit: 'BOX (15ea)',
          orderQty: 40,
          transportMethod: '해운 (Sea)',
          estDispatch: '2026-04-08',
          actualDispatch: '',
          ETD: '2026-04-10',
          ETA: '2026-04-25',
          estReceiving: '2026-04-27',
          salesRep: '최지원',
          client: '오피스비전',
          status: 'Preparing'
        }
      ]);
    }, 800);
  });
};
