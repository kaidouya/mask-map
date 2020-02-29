import React, { useContext, useState } from 'react';
import SearchTop from './SearchTop';
import dataContext from './Store/dataContext';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { getCurrentDate, getCurrentChineseWeek } from './Common/date.js';

function getAllowIdCradNumber() {
  const date = new Date().getDay();
  const infoList = [
    '身分證末碼為: 0,2,4,6,8 的人可購買',
    '身分證末碼為: 1,3,5,7,9 的人可購買',
    '所有人都可以買(不限制號碼)'
  ];
  const witchBase = date !== 0 ? date % 2 : 3;
  return `${infoList[witchBase]}`;
}

// 左側欄位
const SearchArea = () => {
  return (
    <>
      <div>
        <ListItem button>
          <ListItemIcon>
            <DateRangeIcon />
          </ListItemIcon>
          <ListItemText
            primary={getCurrentDate()}
            secondary={getCurrentChineseWeek()}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary={getAllowIdCradNumber()} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary='Customers' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary='Reports' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary='Integrations' />
        </ListItem>
      </div>
    </>
  );
};

export default SearchArea;
