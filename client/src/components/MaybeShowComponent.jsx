import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const MaybeShowComponent = ({ children }) => {
  const [showComponent, setShowComponent] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const hidePaths = ["/"];
    setShowComponent(!hidePaths.includes(location.pathname));
  }, [location]);

  return showComponent ? <div>{children}</div> : null;
};

export default MaybeShowComponent;
