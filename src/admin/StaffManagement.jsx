import React, { useState } from 'react';
import { useRestaurant } from '../RestaurantContext';
import { Plus, User, CheckCircle, XCircle } from 'lucide-react';

function StaffManagement() {
  const { staff, setStaff } = useRestaurant();

  const toggleStaffStatus = (id) => {
    setStaff(staff.map(s => s.id === id ? { ...s, active: !s.active } : s));
  };

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <div>
          <h2>Staff Management</h2>
          <p>Manage your restaurant employees, roles, and shift statuses.</p>
        </div>
        <button className="btn-primary">
          <Plus size={16} />
          Add Employee
        </button>
      </div>

      <div className="dash-card">
        <table className="dash-table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Role</th>
              <th>Shift</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((employee) => (
              <tr key={employee.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--bg-hover)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)' }}>
                      <User size={16} />
                    </div>
                    <span className="font-medium">{employee.name}</span>
                  </div>
                </td>
                <td>{employee.role}</td>
                <td>{employee.shift}</td>
                <td>
                  <span className={`status-badge ${employee.active ? 'completed' : 'pending'}`}>
                    {employee.active ? 'On Duty' : 'Off Duty'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StaffManagement;
