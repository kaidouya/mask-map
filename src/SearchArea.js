import React, { useContext, useState } from 'react';
import dataContext from './Store/dataContext';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { getCurrentDate, getCurrentChineseWeek } from './Common/date.js';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import LocationCityIcon from '@material-ui/icons/LocationCity';

function getAllowIdCradNumber() {
  const date = new Date().getDay();
  const infoList = [
    '身分證末碼為: 0,2,4,6,8 的人可購買',
    '身分證末碼為: 1,3,5,7,9 的人可購買',
    '所有人都可以買(不限制號碼)',
  ];
  const witchBase = date !== 0 ? date % 2 : 2;
  return `${infoList[witchBase]}`;
}

function countryFilter(data) {
  // TODO:看有沒有辦法比較好的寫法可以控制在２３就返回
  // const DEFAULT_COUNTRY_LENGTH = 23;
  // const samplified = [];
  // for (let i = 0; i < data.length; i++) {
  //   if (samplified.length === DEFAULT_COUNTRY_LENGTH) return;
  //   // samplified.push(data[i].properties.county);
  //   console.log(data[i].properties.county);
  // }
  // return samplified;
  const newArr = data.map((item, index) => item.properties.county);
  return [...new Set(newArr)];
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

// 左側欄位
const SearchArea = () => {
  const classes = useStyles();

  const getData = useContext(dataContext);

  const getCountryList = countryFilter(getData);
  console.log(getCountryList);

  const [city, setCity] = React.useState({
    age: '',
    name: 'hai',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = (name) => {
    return (event) => {
      setCity({
        ...city,
        [name]: event.target.value,
      });
    };
  };

  return (
    <>
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
      <ListItem>
        <ListItemIcon>
          <LocationCityIcon />k
        </ListItemIcon>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
            縣市
          </InputLabel>
          <Select
            native
            value={city.age}
            onChange={handleChange('age')}
            labelWidth={labelWidth}
            inputProps={{
              name: 'age',
              id: 'outlined-age-native-simple',
            }}
          >
            <option value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
      </ListItem>
      {/* <ListItem>
        <ListItemIcon>
          <LocationSearchingIcon />
        </ListItemIcon>
        <FormControl variant='outlined' className={classes.formControl}>
          <InputLabel ref={inputLabel} htmlFor='outlined-age-native-simple'>
            Age
          </InputLabel>
          <Select
            native
            value={state.age}
            onChange={handleChange('age')}
            labelWidth={labelWidth}
            inputProps={{
              name: 'age',
              id: 'outlined-age-native-simple'
            }}
          >
            <option value='' />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
      </ListItem> */}
      <Divider />
    </>
  );
};

export default SearchArea;
