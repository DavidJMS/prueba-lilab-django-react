import React from "react";

class CreditItem extends React.Component {
    render() {
      
      let id = this.props.credit.id

      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{this.props.credit.names}</td>
          <td>{this.props.credit.total_debt}</td>
          <td>{this.props.credit.qualification_debtor}</td>
          <td>{this.props.credit.score}</td>
          <td>{this.props.credit.status}</td>
          <td>
                <button onClick={this.props.handlerStatus.bind(this,id,"aprobado")} className="btn btn-primary mr-1"><i class="fas fa-check"></i></button>
                <button onClick={this.props.handlerStatus.bind(this,id,"denegado")} className="btn btn-danger ml-1"><i class="fas fa-window-close"></i></button>
          </td>
        </tr>
      );
    }
  }

  function CreditList(props) {
    const Credit = props.Credit;
    return (
      <table className="table table-hover text-nowrap">
        <thead>
            <tr>
            <th>ID</th>
            <th>Nombres</th>
            <th>Deuda Total</th>
            <th>Puntuación de deudor</th>
            <th>Calificación</th>
            <th>Estado</th>
            <th>Acción</th>
            </tr>
        </thead>
        <tbody>
          {Credit.map(credit => {
            return(
              <CreditItem 
              credit={credit} 
              handlerStatus={props.handlerStatus}
              />
            );
          })}
        </tbody>
        </table>
    );
  }
  
  export default CreditList;