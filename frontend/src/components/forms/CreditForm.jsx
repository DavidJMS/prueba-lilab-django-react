import React from "react";

function CreditForm(props){
    return(
        <form>
            <div className="form-group">
                <label>Nombres</label>
                <input className="form-control" type="text"  name="names" value={props.data.names} onChange={props.handlerChange} />
            </div>
            <div className="form-group">
                <label>Deuda Total</label>
                <input className="form-control" type="number" name="total_debt" value={props.data.total_debt} onChange={props.handlerChange} />
            </div>
            <div className="form-group">
                <label>Puntuación de deudor</label>
                <select className="form-control" name="qualification_debtor" value={props.data.qualification_debtor} onChange={props.handlerChange}>
                <option value="0">Seleccione</option>
                <option value="malo">Malo</option>
                <option value="regular">Regular</option>
                <option value="bueno">Bueno</option>
            </select>
            </div>
            <button onClick={props.handlerSubmit} className="btn btn-success">Registrar</button>
        </form>
    );
}

export default CreditForm;