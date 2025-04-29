import { useState } from 'react';

export const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<null | boolean>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:4000/validate", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setResult(data.valid);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Validate</button>
      {result !== null && (
        <p>{result ? 'Valid Email ✅' : 'Invalid Email ❌'}</p>
      )}
    </form>
  );
};
