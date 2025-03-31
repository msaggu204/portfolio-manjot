import React, { useState } from "react";
import Hamburger from "hamburger-react";

const HamMenu: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <Hamburger color="white" size={16} toggled={isOpen} toggle={setOpen} />
  );
};

export default HamMenu;
