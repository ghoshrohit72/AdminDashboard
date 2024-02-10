import React,{ useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton,Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";


import "react-pro-sidebar/dist/css/styles.css";

const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem active={selected === title} style={{color: colors.grey[100]}} onClick={()=> setSelected(title)} icon={icon}>
        <Typography>{title}</Typography>
        <Link to={to}/>
      </MenuItem>
    )
}

const Sidebar = () => {
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setIsSelected] = useState('Dashboard')

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`
        },
        "& .pro-icon-wrapper":{
          backgroundColor: "transparent !important"
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important"
        },
        "& .pro-inner-item:hover":{
          color: "#868DFB !important"
        },
        "& .pro-menu-item.active":{
          color: "#6870FA !important"
        } 
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape='square'>
          {/* LOGO AND MENU ITEM */}
          <MenuItem
            onClick={()=> setIsCollapsed(prev => !prev)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0px 20px 0px",
              color: colors.grey[100]
            }}
          >
            {
              !isCollapsed && (
                <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                  <Typography variant='h3' color={colors.grey[100]}>
                    ADMINS
                  </Typography>
                  <IconButton onClick={()=> setIsCollapsed(prev => !prev)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )
            }
          </MenuItem>

          {/* USER */}
          {
            !isCollapsed && (
              <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="50px"
                  height="50px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Bran Stark
                </Typography>
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Legendary Climax predictor
                </Typography>
              </Box>
            </Box>
            
            )
          }
          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
          <Item
            title="Dashboard"
            to="/"
            icon={<HomeOutlinedIcon/>}
            selected={selected}
            setSelected={setIsSelected}
          />
          <Typography variant='h6' color={colors.grey[300]} sx={{m: "15px 0px 5px 20px"}}>
          Data
          </Typography>
          <Item
            title="Manage Team"
            to="/team"
            icon={<PeopleOutlinedIcon/>}
            selected={selected}
            setSelected={setIsSelected}
          />
          <Item
            title="Contacts Information"
            to="/contacts"
            icon={<ContactsOutlinedIcon/>}
            selected={selected}
            setSelected={setIsSelected}
          />
          <Item
            title="Invoices Balances"
            to="/invoices"
            icon={<ReceiptOutlinedIcon/>}
            selected={selected}
            setSelected={setIsSelected}
          />
           <Typography variant='h6' color={colors.grey[300]} sx={{m: "15px 0px 5px 20px"}}>
          Pages
          </Typography>
          <Item
            title="Profile Form"
            to="/form"
            icon={<PersonOutlinedIcon/>}
            selected={selected}
            setSelected={setIsSelected}
          />
          <Item
            title="Calendar"
            to="/calendar"
            icon={<CalendarTodayOutlinedIcon/>}
            selected={selected}
            setSelected={setIsSelected}
          />
          <Item
            title="FAQ Page"
            to="/faq"
            icon={<HelpOutlineOutlinedIcon/>}
            selected={selected}
            setSelected={setIsSelected}
          />
           <Typography variant='h6' color={colors.grey[300]} sx={{m: "15px 0px 5px 20px"}}>
          Charts
          </Typography>
          <Item
            title="Bar chart"
            to="/bar"
            icon={<BarChartOutlinedIcon/>}
            selected={selected}
            setSelected={setIsSelected}
          />
          <Item
            title="Pie Chart"
            to="/pie"
            icon={<PieChartOutlineOutlinedIcon/>}
            selected={selected}
            setSelected={setIsSelected}
          />
          <Item
            title="Line Chart"
            to="/line"
            icon={<TimelineOutlinedIcon/>}
            selected={selected}
            setSelected={setIsSelected}
          />
          <Item
            title="Geography Chart"
            to="/geography"
            icon={<MapOutlinedIcon/>}
            selected={selected}
            setSelected={setIsSelected}
          />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default Sidebar