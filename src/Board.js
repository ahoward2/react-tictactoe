import React from "react";

export class TicTacToeBoard extends React.Component {
  onClick(id) {
    this.props.moves.clickCell(id);
  }

  render() {
    let winner = "";
    if (this.props.ctx.gameover) {
      winner =
        this.props.ctx.gameover.winner !== undefined ? (
          <div id="winner">Winner: {this.props.ctx.gameover.winner}</div>
        ) : (
          <div id="winner">Draw!</div>
        );
    }

    const cellStyle = {
      border: "1px solid #555",
      width: "50px",
      height: "50px",
      lineHeight: "50px",
      textAlign: "center",
    };

    const boardStyle = {
      margin: "auto",
    };

    let tbody = [];
    for (let i = 0; i < 3; i++) {
      let cells = [];
      for (let j = 0; j < 3; j++) {
        const id = 3 * i + j;
        cells.push(
          <td style={cellStyle} key={id} onClick={() => this.onClick(id)}>
            {this.props.G.cells[id]}
          </td>
        );
      }
      tbody.push(<tr key={i}>{cells}</tr>);
    }

    return (
      <div>
        <table id="board" style={boardStyle}>
          <tbody>{tbody}</tbody>
        </table>
        {winner}
      </div>
    );
  }
}
