import React, { FC } from "react";
import { Button, List, ListItem, Popover, Typography } from "@mui/material";
import { FiMenu } from "react-icons/fi";
import AddUser from "@/src/features/group_features/add_user/AddUser";
import AddAdmin from "@/src/features/group_features/add_admin/AddAdmin";
import { StyledPopover } from "@/src/widgets/chat/lib/chat_header/lib/MenuChatButton/styles";

export const MenuChatButton: FC<{ group_id: string }> = ({ group_id }) => {
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
      <StyledPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      >
        <List>
          <ListItem>
            <AddAdmin group_id={group_id} />
          </ListItem>
          <ListItem>
            <AddUser group_id={group_id} />
          </ListItem>
        </List>
      </StyledPopover>
    </div>
  );
};
