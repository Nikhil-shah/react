import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { customers } from '../../data/data';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './CustomDataTable.css';

export class CustomDataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            globalFilter: ''
        };
        this.reset = this.reset.bind(this);
    }

    reset() {
        this.setState({
            globalFilter: ''
        });
    }

    componentDidMount() {
        this.setState({ customers: customers });
    }

    render() {
      const header = (
        <div className="table-header">
            <Button type="button" label="Clear" style={{float: "left"}}className="p-button-outlined" icon="pi pi-filter-slash" onClick={this.reset} />
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" value={this.state.globalFilter} onChange={(e) => this.setState({ globalFilter: e.target.value })} placeholder="Global Search" />
            </span>
        </div>
        );
        return (
            <div>
                <div className="card">
                    <DataTable value={this.state.customers} paginator rows={10}
                        header={header} className="p-datatable-customers"
                        globalFilter={this.state.globalFilter} >
                        <Column field="id" header="Id" sortable filter></Column>
                        <Column field="name" header="Name" sortable filter></Column>
                        <Column field="company" header="Company" sortable filter></Column>
                        <Column field="date" header="Date" sortable filter></Column>
                        <Column field="status" header="Status" sortable filter></Column>
                        <Column field="activity" header="Activity" sortable filter></Column>
                        <Column field="balance" header="Balance" sortable filter></Column>
                    </DataTable>
                </div>
            </div>
        );
    }
}

export default CustomDataTable;