import { styled } from "@mui/material/styles";

export const StyledChatHeader = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  borderBottom: `1px solid ${theme.palette.purple.main}`,
  padding: "5px 20px"
}));

export const StyledASide = styled(`div`)`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const StyledChatInfo = styled(`div`)`
  cursor: pointer;
  display: flex;
  align-items: center;
  background: none;
  outline: none;
  gap: 20px;
  > img {
    border-radius: 8px;
  }
  > div {
    display: flex;
    flex-direction: column;
  }
`;
