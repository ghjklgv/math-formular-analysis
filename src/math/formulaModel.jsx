import * as React from "react";
import ShowMathFormula from "./showMathFormula";
import FormularControl from "./formularControl";

export default class formulaModel extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      selectValue: "",
      deleteFlag: false,
      pointName: [],
      formular: "",
      formularFormat: "",
      data: [],
      sentData: [],
      alarmConditions: [],
      alarmSeveritys: [],
    };
  }

  onDataChange = (e) => {
    const mathText = e.target.value;
    const mathFormat = e.target.value;
    this.setState({
      formular: mathText,
      formularFormat: mathFormat,
    });
  };

  onControlSetdata = (math, showMathFormat, e) => {
    let textDom = this.myRef.current;
    const mathText =
      this.state.formular.substr(0, textDom.selectionStart) +
      math +
      this.state.formular.substr(
        textDom.selectionStart,
        this.state.formular.length
      );
    const mathFormat =
      this.state.formularFormat.substr(0, textDom.selectionStart) +
      showMathFormat +
      this.state.formularFormat.substr(
        textDom.selectionStart,
        this.state.formular.length
      );
    this.setState({ formular: mathText, formularFormat: mathFormat });
  };

  handleChange = (e) => {
    let textDom = this.myRef.current;
    const mathText =
      this.state.formular.substr(0, textDom.selectionStart) +
      "@[" +
      e +
      "]" +
      this.state.formular.substr(
        textDom.selectionStart,
        this.state.formular.length
      );
    const mathFormat =
      this.state.formularFormat.substr(0, textDom.selectionStart) +
      "@[" +
      e +
      "]" +
      this.state.formularFormat.substr(
        textDom.selectionStart,
        this.state.formular.length
      );
    this.setState({
      selectValue: e,
      formular: mathText,
      formularFormat: mathFormat,
    });
  };

  render() {
    return (
      <div key={this.props.key}>
        <div className="content-block">
          <div style={{ position: "absolute", fontSize: "20px" }}>
            Point Name : {this.props.pointName}
          </div>
          <div
            style={{
              fontSize: "26px",
              display: "flex",
              paddingLeft: "250px",
            }}
          >
            <ShowMathFormula formular={this.state.formularFormat} />
          </div>
          <div>
            <textarea
              className="textAreaStyle"
              ref={this.myRef}
              disabled={this.state.deleteFlag}
              value={this.state.formular}
              onChange={this.onDataChange}
            />
          </div>
          <div>
            <FormularControl onChange={this.onControlSetdata} />
          </div>
        </div>
      </div>
    );
  }
}
