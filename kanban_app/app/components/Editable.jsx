'use strict';

import React from 'react';

export default class Editable extends React.Component {
    constructor(props) {
        super(props)

        this.renderEdit = this.renderEdit.bind(this);
        this.renderValue = this.renderValue.bind(this);
        //this.edit = this.edit.bind(this);
        this.checkEnter = this.checkEnter.bind(this);
        this.finishEdit = this.finishEdit.bind(this);

    }
    render() {
        const {value, onEdit, onValueClick, editing, ...props} = this.props;
        return (
            <div {...props}>
                {editing ? this.renderEdit() : this.renderValue() }
            </div>
        )
    }


    renderEdit() {
        return <input type='text'
            ref={
                (e) => e ? e.selectionStart = this.props.value.length:null
            }
            autoFocus = {true}
            defaultValue = {this.props.value}
            onBlur ={this.finishEdit}
            onKeyPress = {this.checkEnter}
            />
    }

    renderDelete() {
        return <button className="delete" onClick={this.props.onDelete}>x</button>
    }

    renderValue() {
        const onDelete = this.props.onDelete;

        return <div onClick = {this.props.onValueClick}>
            <span className="value">{this.props.value}</span>
            {onDelete ? this.renderDelete() : null}
        </div>
    }



    checkEnter(e) {
        if (e.key === 'Enter') {
            this.finishEdit(e);
        }
    }

    finishEdit(e) {
        const value = e.target.value;
        if (this.props.onEdit) {
            this.props.onEdit(value);

        }
    }
}

