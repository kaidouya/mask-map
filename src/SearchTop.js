import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// function getCountyOptions(arr) {    //獲取縣市列表(不重複)
//     const set = new Set()

//     return arr.filter(({ county }) => !set.has(county) ? set.add(county) : false).reduce((result, { county }) => {
//         if (county) {
//             result.push({
//                 value: county,
//                 label: county
//             })
//         }
//         return result
//     }, [])
// }
// function getTownOptions(arr, location) { //獲取地區列表(不重複)
//     const set = new Set()
//     return arr.filter(({ county }) => {
//         return county === location
//     }).filter(({ town }) => !set.has(town) ? set.add(town) : false)
//         .map(({ town }) => {
//             return {
//                 value: town,
//                 label: town
//             }
//         })
// }

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const SearchTop = ({ options, setCounty, setTown, county }) => {
    // const countyOptions = getCountyOptions(options)
    // const townOptions = county ? getTownOptions(options, county) : []

    // function locationChangeHandler(selectedOptions) {
    //     setCounty(selectedOptions.value)
    //     setTown("")
    // }
    // function townChangeHandler(selectedOptions) {
    //     setTown(selectedOptions.value)
    // }


    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = name => event => {
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <div className="select-box">
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                    Age
        </InputLabel>
                <Select
                    native
                    value={state.age}
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
            {/* <div>
                <span>縣市</span>
                <Select className="select" options={countyOptions} onChange={locationChangeHandler} />
            </div>
            <div>
                <span>地區</span>
                <Select className="select" options={townOptions} onChange={townChangeHandler} />
            </div> */}
        </div>
    );
}

export default SearchTop;