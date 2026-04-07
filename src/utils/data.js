export const fetchTrackingData = async () => {
  const SHEET_ID = '1owEsedSM4IX-g5rUidJRkSitUUOZ6IvQ-NnDvBVnPvY';
  // Google Visualization API (JSONP 형태로 CORS 우회)
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

  try {
    const res = await fetch(url);
    const text = await res.text();
    // JSONP 포맷 벗겨내고 순수 JSON 객체로 파싱
    const jsonStr = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
    const data = JSON.parse(jsonStr);

    let parsedRows = [];

    // gviz 데이터의 첫 행은 table.cols 배열일 수 있고, 데이터는 table.rows 에 담깁니다.
    // 0: 발주 일자, 1: SAP Code, 2: Product name, 3: Package, 4: Unit
    // 5: Order, 6: 운송, 7: 공장출고(예정), 8: 출고일, 9: ETD, 10: ETA, 11: MBL, 12: HBL, 13: 담당자, 14: 발주처
    data.table.rows.forEach((row, index) => {
      const getVal = (colIdx) => {
        if (!row.c || !row.c[colIdx]) return '';
        return row.c[colIdx].f || row.c[colIdx].v || '';
      };

      const itemName = getVal(2);
      if (!itemName || itemName === 'Product name') return; // 헤더나 빈 칸 패스

      const sapCode = getVal(1);
      const pack = getVal(3);
      const unit = getVal(4);
      const orderQty = getVal(5);
      const transportMethod = getVal(6);
      const estDispatch = getVal(7);
      let actualDispatch = getVal(8);
      const etd = getVal(9);
      const eta = getVal(10);
      const salesRep = getVal(13);
      const client = getVal(14);

      if (actualDispatch === '1900-01-00' || actualDispatch === '-') actualDispatch = '';

      // 상태(Status) 계산
      let status = 'Preparing';
      if (actualDispatch && actualDispatch !== '1900-01-00' && actualDispatch !== '-') {
        status = 'In Transit';
      }
      if (eta && eta !== '1900-01-00' && eta !== '-') {
        const etaDate = new Date(eta);
        const today = new Date();
        if (etaDate < today && actualDispatch) {
          status = 'Completed';
        }
      }

      parsedRows.push({
        id: sapCode ? sapCode : `UNK-${index}`,
        itemName: itemName,
        packUnit: `${pack} ${unit}`.trim(),
        orderQty: orderQty,
        transportMethod: transportMethod || '-',
        estDispatch: estDispatch !== '1900-01-00' && estDispatch ? estDispatch : '미정',
        actualDispatch: actualDispatch,
        ETD: etd !== '1900-01-00' && etd ? etd : '미정',
        ETA: eta !== '1900-01-00' && eta ? eta : '미정',
        estReceiving: eta !== '1900-01-00' && eta ? eta : '미정',
        salesRep: salesRep || '-',
        client: client || '-',
        status: status
      });
    });

    return parsedRows;

  } catch (error) {
    console.error('Error fetching tracker data:', error);
    return [];
  }
};
