import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Package, TrendingUp, AlertTriangle, Clock } from 'lucide-react';
import { fetchTrackingData } from '../utils/data';
import './Dashboard.css';

const chartData = [
  { name: 'Jan', volume: 4000 },
  { name: 'Feb', volume: 3000 },
  { name: 'Mar', volume: 2000 },
  { name: 'Apr', volume: 2780 },
  { name: 'May', volume: 1890 },
  { name: 'Jun', volume: 2390 },
  { name: 'Jul', volume: 3490 },
];

const DashboardPage = () => {
  const [stats, setStats] = useState({ totalActive: 0, delayed: 0, completed: 0, pending: 0 });
  
  useEffect(() => {
    fetchTrackingData().then(data => {
      let active = 0, delayed = 0, completed = 0, pending = 0;
      data.forEach(item => {
        if (item.status === 'In Transit') active++;
        else if (item.status === 'Delayed') delayed++;
        else if (item.status === 'Completed') completed++;
        else if (item.status === 'Preparing') pending++;
      });
      setStats({ totalActive: active + delayed, delayed, completed, pending });
    });
  }, []);

  return (
    <div className="dashboard animate-fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">Logistics <span className="text-gradient">Overview</span></h1>
          <p className="page-subtitle">Real-time tracking and logistics KPIs</p>
        </div>
        <div className="date-filter glass-card">
          <span>April 2026</span>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card glass-card">
          <div className="stat-icon bg-blue"><Package size={24} /></div>
          <div className="stat-info">
            <p className="stat-label">Active Shipments</p>
            <h3 className="stat-value">{stats.totalActive}</h3>
          </div>
          <div className="stat-trend positive">+12.5% this month</div>
        </div>
        
        <div className="stat-card glass-card">
          <div className="stat-icon bg-warning"><Clock size={24} /></div>
          <div className="stat-info">
            <p className="stat-label">Pending / Preparing</p>
            <h3 className="stat-value">{stats.pending}</h3>
          </div>
          <div className="stat-trend neutral">Steady workflow</div>
        </div>
        
        <div className="stat-card glass-card">
          <div className="stat-icon bg-danger"><AlertTriangle size={24} /></div>
          <div className="stat-info">
            <p className="stat-label">Delayed Deliveries</p>
            <h3 className="stat-value">{stats.delayed}</h3>
          </div>
          <div className="stat-trend negative">Requires attention</div>
        </div>
        
        <div className="stat-card glass-card">
          <div className="stat-icon bg-success"><TrendingUp size={24} /></div>
          <div className="stat-info">
            <p className="stat-label">Completed Delivery</p>
            <h3 className="stat-value">{stats.completed}</h3>
          </div>
          <div className="stat-trend positive">+5.2% accuracy</div>
        </div>
      </div>

      <div className="charts-section">
        <div className="chart-container glass-card">
          <div className="chart-header">
            <h3>Shipping Volume Trend</h3>
          </div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" tick={{fill: '#94a3b8'}} axisLine={false} />
                <YAxis stroke="#94a3b8" tick={{fill: '#94a3b8'}} axisLine={false} />
                <Tooltip contentStyle={{backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px'}} />
                <Area type="monotone" dataKey="volume" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorVolume)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="recent-activity glass-card">
          <div className="chart-header">
            <h3>Action Needed</h3>
          </div>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-dot bg-danger"></div>
              <div className="activity-content">
                <p>TRK-20260401-02 (게이밍 기계식 키보드)</p>
                <span>ETA Delayed due to Sea port congestion.</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-dot bg-warning"></div>
              <div className="activity-content">
                <p>TRK-20260403-02 requires actual dispatch confirmation.</p>
                <span>Pending since yesterday.</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-dot bg-success"></div>
              <div className="activity-content">
                <p>TRK-20260328-01 Delivered successfully.</p>
                <span>Client: 사운드맥스</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
