import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(name, symbol, price, market_cap, volume,) {
    return {
        name,
        symbol,
        price,
        market_cap,
        volume,
        history: [
            {
                date: '2020-01-05',
                customerId: 'hola rey',
               
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                
            },
        ],
    };
}

class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    toggleRow = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        const { row } = this.props;
        return (
            <React.Fragment>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={this.toggleRow}
                        >
                            {this.state.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.symbol}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.market_cap}</TableCell>
                    <TableCell align="right">{row.volume}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography variant="h6" gutterBottom component="div">
                                    DETALLES
                                </Typography>
                                <Table size="small" aria-label="details">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Customer</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.history.map((historyRow) => (
                                            <TableRow key={historyRow.date}>
                                                <TableCell component="th" scope="row">
                                                    {historyRow.date}
                                                </TableCell>
                                                <TableCell>{historyRow.customerId}</TableCell>

                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        );
    }
}

Row.propTypes = {
    row: PropTypes.shape({
        name: PropTypes.string.isRequired ,
        symbol: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        market_cap: PropTypes.number.isRequired,
        volume: PropTypes.number.isRequired,
        
    }).isRequired,
};



class CollapsibleTable extends Component {



    render() {
        const { items } = this.props;

        const rows = items.map(item => {
            return createData(item.name, item.symbol, item.price, item.market_cap, item.volume);
        });



        return (
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell >Nombre</TableCell>
                            <TableCell align='right'>Simbolo</TableCell>
                            <TableCell align='right'>Precio</TableCell>
                            <TableCell align='right'>Cap de Mercado</TableCell>
                            <TableCell align='right'>Volumen</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default CollapsibleTable;
