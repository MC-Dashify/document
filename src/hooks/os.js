import { useState, useEffect } from 'react';

export default function useOperatingSystem() {
  const [operatingSystem, setOperatingSystem] = useState('');

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.includes('Windows NT')) {
      setOperatingSystem('Windows');
    } else if (userAgent.includes('Linux')) {
      setOperatingSystem('Linux');
    } else if (userAgent.includes('Macintosh')) {
      setOperatingSystem('Mac');
    } else {
      setOperatingSystem('Unknown');
    }
  }, []);

  return operatingSystem;
}
