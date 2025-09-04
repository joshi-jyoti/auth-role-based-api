import React, { useState } from 'react';
import API from '../api';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f7f7fa',
  },
  form: {
    background: '#fff',
    padding: '2.5rem 2.5rem 2rem 2.5rem',
    borderRadius: '16px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '350px',
    alignItems: 'center',
    gap: '1rem',
    position: 'relative',
  },
  icon: {
    fontSize: '3rem',
    color: '#6c3ef5',
    marginBottom: '0.5rem',
  },
  input: {
    width: '100%',
    padding: '0.85rem',
    margin: '0',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    fontSize: '1.05rem',
    background: '#f9f9fc',
    outline: 'none',
    transition: 'border 0.2s',
  },
  button: {
    width: '100%',
    padding: '0.85rem',
    background: 'linear-gradient(90deg,#6c3ef5 60%,#7f53f7 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '1.08rem',
    marginTop: '0.5rem',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(108,62,245,0.08)',
    letterSpacing: '0.02em',
  },
  error: {
    color: '#d32f2f',
    marginBottom: '0.5rem',
    fontSize: '0.98rem',
    textAlign: 'center',
  },
  success: {
    color: '#388e3c',
    marginBottom: '0.5rem',
    fontSize: '0.98rem',
    textAlign: 'center',
  },
  registerLink: {
    marginTop: '1rem',
    fontSize: '1rem',
    color: '#6c3ef5',
    textDecoration: 'none',
    fontWeight: 500,
    textAlign: 'center',
    cursor: 'pointer',
    display: 'block',
  }
};

function Login({ onLogin }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      const res = await API.post('/auth/login', form);
      if (res.data && res.data.token) {
        setSuccess('Login successfully!');
        onLogin(res.data.user, res.data.token);
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials');
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.icon}>🔑</div>
        <h2 style={{ marginBottom: '0.5rem', color: '#222', fontWeight: 700, fontSize: '1.5rem' }}>Login Your Account</h2>
        <input
          style={styles.input}
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button style={styles.button} type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <a href="/register" style={styles.registerLink}>
          <span role="img" aria-label="register">📝</span> Don't have an account? Register
        </a>
        {error && <div style={styles.error}>{error}</div>}
        {success && <div style={styles.success}>{success}</div>}
      </form>
    </div>
  );
}

export default Login;