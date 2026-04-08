import React, { useState, useEffect } from 'react';
import { Search, Filter, Download } from 'lucide-react';
import { fetchTrackingData } from '../utils/data';
import './TrackPage.css';

const TrackPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrackingData().then(fetchedData => {
      setData(fetchedData);
      setLoading(false);
    });
  }, []);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'In Transit': return <span className="badge badge-info">운송중</span>;
      case 'Delayed': return <span className="badge badge-error">지연발생</span>;
      case 'Preparing': return <span className="badge badge-warning">출고대기</span>;
      case 'Completed': return <span className="badge badge-success">도착완료</span>;
      default: return <span className="badge">{status}</span>;
    }
  };

  return (
    <div className="track-page animate-fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">화물 <span className="text-gradient">Tracking</span></h1>
          <p className="page-subtitle">구글 스프레드시트 연동: 배송 상태 상세 조회 (View Only)</p>
        </div>
        <button className="export-btn">
          <Download size={16} /> 엑셀 다운로드
        </button>
      </div>

      <div className="table-container glass-card">
        <div className="table-controls">
          <div className="search-box">
            <Search size={18} />
            <input type="text" placeholder="품목명, 고객사 검색..." />
          </div>
          <button className="filter-btn">
            <Filter size={18} /> 조건 필터
          </button>
        </div>

        {loading ? (
          <div className="loading-state">데이터를 불러오는 중입니다...</div>
        ) : (
          <div className="table-wrapper">
            <table className="tracking-table">
              <thead>
                <tr>
                  <th>상태</th>
                  <th>품목명</th>
                  <th>포장단위 / 주문수량</th>
                  <th>운송수단</th>
                  <th>고객사 / 영업사원</th>
                  <th>예상/실제 출고일</th>
                  <th>ETD / ETA</th>
                  <th>예상입고일</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, idx) => (
                  <tr key={idx}>
                    <td>{getStatusBadge(row.status)}</td>
                    <td className="item-name font-medium">{row.itemName}</td>
                    <td>
                      <div className="td-stacked">
                        <span>{row.packUnit}</span>
                        <span className="text-muted">수량: {row.orderQty}</span>
                      </div>
                    </td>
                    <td>{row.transportMethod}</td>
                    <td>
                      <div className="td-stacked">
                        <span>{row.client}</span>
                        <span className="text-muted">{row.salesRep}</span>
                      </div>
                    </td>
                    <td>
                      <div className="td-stacked">
                        <span>예상: {row.estDispatch}</span>
                        <span className={row.actualDispatch ? "text-success" : "text-muted"}>출고: {row.actualDispatch || '대기중'}</span>
                      </div>
                    </td>
                    <td>
                      <div className="td-stacked">
                        <span>{row.ETD}</span>
                        <span className={row.status === 'Delayed' ? "text-error font-medium" : ""}>{row.ETA}</span>
                      </div>
                    </td>
                    <td className="font-medium">{row.estReceiving}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackPage;
