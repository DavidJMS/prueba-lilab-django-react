import React from "react";

class CreditItem extends React.Component {
    render() {
      
      let id = this.props.store.id

      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{this.props.store.names}</td>
          <td>{this.props.store.total_debt}</td>
          <td>{this.props.store.qualification_debtor}</td>
          <td>{this.props.store.score}</td>
          <td>
                <button className="btn btn-primary mr-1"><i class="fas fa-check"></i></button>
                <button onClick={this.props.handlerDelete.bind(this,id)} className="btn btn-danger ml-1"><i class="fas fa-window-close"></i></button>
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
            </tr>
        </thead>
        <tbody>
          {Credit.map(store => {
            return(
              <CreditItem 
              store={store} 
              handlerDelete={props.handlerDelete}
              />
            );
          })}
        </tbody>
        </table>
    );
  }
  
  export default CreditList;