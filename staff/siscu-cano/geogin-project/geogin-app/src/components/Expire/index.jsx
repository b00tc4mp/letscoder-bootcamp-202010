import React, { useEffect, useState } from "react";

export const Expire = ({ delay, children }) => {

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false)
    }, delay)
  }, [delay])

  return visible ? <div>{children}</div> : <div />
}