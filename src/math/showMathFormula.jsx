import * as React from 'react'
import 'katex/dist/katex.min.css'
import { InlineMath } from 'react-katex'
import MathAnalysis from './mathAnalysis'

export default class ShowMathFormula extends React.Component {
  constructor (props) {
    super(props)
    this.analysis = new MathAnalysis()
    this.state = {
      data: [],
      sentData: [],
      alarmConditions: [],
      alarmSeveritys: []
    }   
  }
  componentDidUpdate () {
    this.analysis.analysis(this.props.formular)
  }
  render () {
    return (
      <div ref={this.node}  style={{overflow:'auto',paddingTop:'16px',paddingBottom:'16px'}}>
        <InlineMath>{ this.analysis.analysis(this.props.formular)}</InlineMath>
      </div>
    )
  }
}
