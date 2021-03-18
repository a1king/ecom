import React, { Componet } from "react";

export class FormButton extends Component {
  render() {
    const { className, title, type, onClick, input } = this.props;
    return (
      <div className={`${className} form-button`}>
        <button
          className={`form-button__button`}
          type={type}
          {...input}
          onClick={onClick}
        >
          {title}
        </button>
      </div>
    );
  }
}
