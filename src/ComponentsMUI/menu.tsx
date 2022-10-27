import React from "react";
import { Link } from "react-router-dom";
import { MenuItem, Menu, MenuProps, withStyles } from "@material-ui/core/";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function CustomizedMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="h-24 bg-blue-800 flex items-center pr-2 pl-2">
      <button onClick={handleClick}>
        ola
        <img src="" alt="" />
      </button>
      <StyledMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/">
          <StyledMenuItem>Teste</StyledMenuItem>
        </Link>
        <Link to={"/"}>
          <StyledMenuItem>Teste</StyledMenuItem>
        </Link>
        <Link to="/clientes" className="w-48">
          <StyledMenuItem>Lista de Clientes</StyledMenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
}

export { CustomizedMenu as Menu };
