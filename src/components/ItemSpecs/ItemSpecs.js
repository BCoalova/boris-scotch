import React from 'react' 
//Bootstrap
import Table from 'react-bootstrap/Table'

const ItemSpecs = ({specs}) =>{
    return(
        <Table striped responsive hover variant="dark">
            <thead>
                <tr>
                    <td  colSpan="2"><h3>Especificaciones</h3></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Clock: </td>
                    <td>{(specs.clock).map((e,i)=> {
                        return(
                            <p key={i}>{e}</p>
                        )
                    })}</td>
                </tr>
                <tr>
                    <td>Maximum Displays: </td>
                    <td>{specs.maximumDisplays}</td>
                </tr>
                <tr>
                    <td>Resolution: </td>
                    <td>{(specs.resolution).map((e, i)=> {
                        return(
                            <p key={i}>{e}</p>
                        )
                    })}</td>
                </tr>
                <tr>
                    <td>Interface: </td>
                    <td>{specs.interface}</td>
                </tr>
                <tr>
                    <td>Output:</td>
                    <td>{(specs.output).map((e,i)=> {
                        return(
                            <p key={i}>{e}</p>
                        )
                    })}</td>
                </tr>
                <tr>
                    <td>Cooling: </td>
                    <td>{(specs.cooling).map((e, i)=> {
                        return(
                            <p key={i}>{e}</p>
                        )
                    })}</td>
                </tr>
                <tr>
                    <td>Form Factor: </td>
                    <td>{specs.formFactor}</td>
                </tr>
                <tr>
                    <td>Dimension: </td>
                    <td>{specs.dimension}</td>
                </tr>
                <tr>
                    <td>Power Consumption: </td>
                    <td>{specs.powerConsumption}</td>
                </tr>
                <tr>
                    <td>System Requirement: </td>
                    <td>{(specs.systemRequirement).map((e,i)=> {
                        return(
                            <p key={i}>{e}</p>
                        )
                    })}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default ItemSpecs