import './Boardstyle.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const putmails = [];

class AddMailingList extends Component {
    constructor(props) {
        super(props);
        this.autoorder = this.autoorder.bind(this);
        this.putMail = this.putMail.bind(this);
        this.deleteEmails = this.deleteEmails.bind(this);
        this.renderPuttingMails = this.renderPuttingMails.bind(this);
        this.renderOptions = this.renderOptions.bind(this);
        this.state = { mydata: [], putmails: [] };
    };

    autoorder(e) {
        const database = ["eagis92@gmail.com", "eagirdsfs@mail.ru", "eagydhfge@mail.ru", "eagtyrd@mail.ru", "armenMkhitaryan@mail.ru", "narekaci@quchak.com", "narek@duryan.com"];
        const stores = [];
        database.forEach(function (value, key) {
            if (value.indexOf(e.target.value) != -1 && e.target.value.length > 1) {
                stores.push(value);
            }
            else {
                return 0;
            };
        })
        this.setState({ mydata: stores });
        console.log(this.state.mydata);
    };

    putMail(e) {
        this.state.putmails.push(e.target.innerHTML);
        this.setState({ putmails: this.state.putmails });
        const partIndex = this.state.mydata.indexOf(e.target.innerHTML);
        this.state.mydata.splice(partIndex, 1);
        this.setState({ mydata: this.state.mydata });
    };

    deleteEmails(e) {
        const valuesof = this.state.putmails.filter((value) => { return value != e.target.parentNode.previousSibling.innerHTML });
        this.setState({ putmails: valuesof });
    };

    renderOptions(value, key) {
        return (<div className="searchRes" id={key} onClick={this.putMail} key={key}>{value}</div>);
    };

    renderPuttingMails(value, key) {
        return (
            <span key={key}>
                <span className="mdl-chip mdl-chip--deletable">
                    <span className="mdl-chip__text">{value}</span>
                    <span onClick={this.deleteEmails} type="button" className="mdl-chip__action"><i className="material-icons">cancel</i></span>
                </span>
            </span>)
    };

    render() {
        return (
            <div className="menuListWrap">
                <h3 className="list_head">Add new Mailing List</h3>
                <div className="add_list">
                    <form action="#" method="POST">
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input list_input" type="text" id="list_name" name="listname" />
                            <label className="mdl-textfield__label" htmlFor="list_name">Mailing List Name</label>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input list_input" onChange={this.autoorder} type="email" id="addtolist" name="emails" />
                            <label className="mdl-textfield__label" htmlFor="addtolist">Add Emails to List</label>
                            <div className="searchMail">{this.state.mydata.map(this.renderOptions.bind(this))}</div>
                        </div>
                        <div className="mail_area" name="all_emails">
                            {this.state.putmails.map(this.renderPuttingMails)}
                        </div>
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored save_list" type="submit">Save</button>
                    </form>
                </div>
            </div>
        )
    };
};
export default AddMailingList ;


