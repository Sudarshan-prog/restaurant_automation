import React from 'react';
import { useRestaurant } from '../RestaurantContext';
import { MessageSquare, Star, CheckCircle } from 'lucide-react';

function Feedback() {
  const { feedbacks, setFeedbacks } = useRestaurant();

  const markResolved = (id) => {
    setFeedbacks(feedbacks.map(f => f.id === id ? { ...f, status: 'Resolved' } : f));
  };

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <div>
          <h2>Customer Feedback</h2>
          <p>Review customer ratings and resolve complaints.</p>
        </div>
      </div>

      <div className="dash-card">
        <table className="dash-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Rating</th>
              <th>Comment</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((fb) => (
              <tr key={fb.id}>
                <td className="font-medium">{fb.customer}</td>
                <td>
                  <div style={{ display: 'flex', gap: '2px', color: '#F59E0B' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < fb.rating ? "currentColor" : "none"} />
                    ))}
                  </div>
                </td>
                <td style={{ maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {fb.comment}
                </td>
                <td>
                  <span className={`status-badge ${fb.status === 'Resolved' ? 'completed' : 'error'}`}>
                    {fb.status}
                  </span>
                </td>
                <td>
                  {fb.status === 'Open' ? (
                    <button 
                      onClick={() => markResolved(fb.id)}
                      className="btn-secondary"
                      style={{ padding: '0.4rem 0.75rem', fontSize: '0.85rem', color: 'var(--success)' }}
                    >
                      <CheckCircle size={14} /> Resolve
                    </button>
                  ) : (
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Resolved</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Feedback;
