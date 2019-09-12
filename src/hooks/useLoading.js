import React, { useState } from "react";

export function Loading(props) {
  return (
    <div>
      <p>Loading...</p>
    </div>
  );
}

export function useLoading(initialState) {
  const [isLoading, setIsLoading] = useState(initialState);

  return {
    isLoading,
    setIsLoading
  };
}
