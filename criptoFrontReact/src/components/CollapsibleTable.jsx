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
import CustomAreaChart from './CustomAreaChart.jsx';
import Card from '@mui/material/Card';
import numeral from 'numeral';

function createData(name, symbol, price, market_cap, volume) {
  return {
    name,
    symbol,
    price,
    market_cap,
    volume,
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
    this.setState((prevState) => ({ open: !prevState.open }));
  };

  formatNumber = (value) => {
    // Verificar si el valor es lo suficientemente grande
    if (value >= 1000) {
      // Formato con mayúscula para el múltiplo
      return numeral(value).format('0.0a').toUpperCase();
    } else {
      // Mostrar el valor sin formato
      return numeral(value).format('0.0a');
    }
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
          <TableCell align="right">{this.formatNumber(row.price)}</TableCell>
          <TableCell align="right">{this.formatNumber(row.market_cap)}</TableCell>
          <TableCell align="right">{this.formatNumber(row.volume)}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
              <Card>
                <Box sx={{ margin: 1 }}>
                  <Typography variant="h6" gutterBottom component="div">
                    Historico de Precios
                  </Typography>
                  <CustomAreaChart simbolo={row.symbol} />
                </Box>
              </Card>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    market_cap: PropTypes.number.isRequired,
    volume: PropTypes.number.isRequired,
  }).isRequired,
};

class CollapsibleTable extends Component {
  render() {
    const { items } = this.props;

    const rows = items.map((item) => {
      return createData(item.name, item.symbol, item.price, item.market_cap, item.volume);
    });

    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Simbolo</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell align="right">Cap de Mercado</TableCell>
              <TableCell align="right">Volumen</TableCell>
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

CollapsibleTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      market_cap: PropTypes.number.isRequired,
      volume: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CollapsibleTable;
