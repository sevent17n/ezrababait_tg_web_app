import React, { FC } from "react";
import { Button, Popover, Typography } from "@mui/material";
import { FiMenu } from "react-icons/fi";
import AddUser from "@/src/features/group_features/add_user/AddUser";
import AddAdmin from "@/src/features/group_features/add_admin/AddAdmin";

const MenuChatButton: FC<{ group_id: string }> = ({ group_id }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        <FiMenu />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      >
        <ul>
          <li>
            <AddAdmin group_id={group_id} />
          </li>
          <li>
            <AddUser group_id={group_id} />
          </li>
        </ul>
      </Popover>
    </div>
  );
};

export default MenuChatButton;
