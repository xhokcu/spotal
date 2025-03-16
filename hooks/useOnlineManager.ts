import { onlineManager } from "@tanstack/react-query";
import * as Network from "expo-network";
import { useEffect, useState } from "react";

export const useOnlineManager = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const subscription = Network.addNetworkStateListener((state) => {
      const online = !!state.isConnected;
      setIsOnline(online);
      onlineManager.setOnline(online);
    });
    return () => subscription.remove();
  }, []);

  return { isOnline };
};
