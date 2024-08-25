"use client";

import { logout } from '@/app/action/user/action';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const CheckSecurity = ({ user, loggedInUser }) => {
  const router = useRouter();

  useEffect(() => {
    const checkSecurity = async () => {
      const isBlocked = user?.accountStatus;
      if (!isBlocked) {
        await logout();
        router.push("/");
      } else if (user?.securityCode !== loggedInUser?.securityCode) {
        await logout();
        router.push("/");
      }
    };

    checkSecurity();
  }, []);

  return null;
};

export default CheckSecurity;
