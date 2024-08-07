import React from 'react';

// Brightlayer UI Icons and Symbols
import * as Progress from '@brightlayer-ui/react-progress-icons';
import * as BluiColors from '@brightlayer-ui/colors';

// Material-UI Components
import { Typography, AppBar, Paper, Toolbar, makeStyles, FormControlLabel, Checkbox } from '@material-ui/core';
import { BLUIColor } from '@brightlayer-ui/types';

const size = 48;
type ColorPalette = {
    [key: string]: BLUIColor;
};
const colorSet: ColorPalette = BluiColors;
const colors = ['red', 'orange', 'gold', 'yellow', 'green', 'lightBlue', 'blue', 'purple', 'gray', 'black'];
const weight = 300;

const useStyles = makeStyles(() => ({
    header: {
        boxShadow: 'none',
    },
}));

export const ProgressIconCard: React.FC = (): JSX.Element => {
    const classes = useStyles();

    const [isOutlined, setIsOutlined] = React.useState(false);

    return (
        <Paper elevation={4}>
            <AppBar position="static" color="primary" classes={{ root: classes.header }}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Brightlayer UI Progress Icons
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar style={{ justifyContent: 'flex-end' }} variant={'dense'}>
                <FormControlLabel
                    control={<Checkbox color="primary" onClick={(): void => setIsOutlined(!isOutlined)} />}
                    checked={isOutlined}
                    label={'View Outlined Icons'}
                    labelPlacement={'start'}
                />
            </Toolbar>
            <div style={{ textAlign: 'center', padding: '0 24px 24px' }}>
                <Typography variant={'h6'}>{'Battery'}</Typography>
                {colors.map((key, index) => (
                    <Progress.Battery
                        key={`battery_${key}`}
                        percent={(index + 1) * 10}
                        size={size}
                        color={colorSet[key][weight]}
                        outlined={isOutlined}
                    />
                ))}
                <br />
                <Typography variant={'h6'}>{'Pie'}</Typography>
                {colors.map((key, index) => (
                    <Progress.Pie
                        key={`pie_${key}`}
                        percent={(index + 1) * 10}
                        size={size}
                        color={colorSet[key][weight]}
                        outlined={isOutlined}
                    />
                ))}
                <br />
                <Typography variant={'h6'}>{'Donut'}</Typography>
                {colors.map((key, index) => (
                    <Progress.Pie
                        key={`donut_${key}`}
                        percent={(index + 1) * 10}
                        size={size}
                        color={colorSet[key][weight]}
                        ring={isOutlined ? 6 : 4}
                        outlined={isOutlined}
                    />
                ))}
                <br />
                <Typography variant={'h6'}>{'Heart'}</Typography>
                {colors.map((key, index) => (
                    <Progress.Heart
                        key={`heart_${key}`}
                        percent={(index + 1) * 10}
                        size={size}
                        color={colorSet[key][weight]}
                        outlined={isOutlined}
                    />
                ))}
                <Typography variant={'h6'}>{'UPS'}</Typography>
                {colors.map((key, index) => (
                    <Progress.Ups
                        key={`ups_${key}`}
                        percent={(index + 1) * 10}
                        size={size}
                        color={colorSet[key][weight]}
                        outlined={isOutlined}
                    />
                ))}
            </div>
        </Paper>
    );
};
