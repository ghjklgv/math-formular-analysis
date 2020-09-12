import * as React from 'react'
import { Tooltip, Button, Modal } from 'antd'
import 'katex/dist/katex.min.css'
import { InlineMath } from 'react-katex'

export default class FormularControl extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='formular-control-templete'>
        <div className='formular-control-block' style={{ marginRight: '25px' }}>
          <div>Operators</div>
          <Tooltip placement='topLeft' title='Addition'>
            <Button onClick={this.props.onChange.bind(this, ' +', ' +')}>
              +
            </Button>
          </Tooltip>
          <Tooltip placement='topLeft' title='Subtraction'>
            <Button onClick={this.props.onChange.bind(this, ' -', ' -')}>
              -
            </Button>
          </Tooltip>
          <Tooltip placement='topLeft' title='Multiplication'>
            <Button onClick={this.props.onChange.bind(this, ' *', ' *')}>
              *
            </Button>
          </Tooltip>
          <Tooltip placement='topLeft' title='Division'>
            <Button onClick={this.props.onChange.bind(this, ' /', ' \\over')}>
              /
            </Button>
          </Tooltip>
          <Tooltip placement='topLeft' title='Modulus'>
            <Button onClick={this.props.onChange.bind(this, ' %', ' \\%')}>
              mod
            </Button>
          </Tooltip>
        </div>
        <div className='formular-control-block' style={{ marginRight: '25px' }}>
          <div style={{ paddingLeft: '4px' }}>Constants</div>
          <Tooltip placement='topLeft' title="Euler's number">
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.E',
                '2.718281828459045'
              )}
            >
              <InlineMath>E </InlineMath>
            </Button>
          </Tooltip>
          <Tooltip placement='topLeft' title='PI'>
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.P',
                '3.141592653589793'
              )}
            >
              <InlineMath>\pi </InlineMath>
            </Button>
          </Tooltip>
          <Tooltip placement='topLeft' title='Natural logarithm of 2'>
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.LN2',
                '0.6931471805599453'
              )}
            >
              <InlineMath>ln(2) </InlineMath>
            </Button>
          </Tooltip>
          <Tooltip placement='topLeft' title='Natural logarithm of 10'>
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.LN10',
                '2.302585092994046'
              )}
            >
              <InlineMath>ln(10) </InlineMath>
            </Button>
          </Tooltip>
          <Tooltip placement='topLeft' title='Base 2 logarithm of E'>
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.LOG2E',
                '1.4426950408889634'
              )}
            >
              <InlineMath>log_2 E </InlineMath>
            </Button>
          </Tooltip>
          <Tooltip placement='topLeft' title='Base 10 logarithm of E'>
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.LOG10E',
                '0.4342944819032518'
              )}
            >
              <InlineMath>{'\\log_{10} E'}</InlineMath>
            </Button>
          </Tooltip>
          <Tooltip placement='topLeft' title='Square root of 2'>
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.SQRT2',
                '1.4142135623730951'
              )}
            >
              <InlineMath>\sqrt 2</InlineMath>
            </Button>
          </Tooltip>
          <Tooltip placement='topLeft' title='square root of 1/2'>
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.SQRT10',
                '0.7071067811865476'
              )}
            >
              <InlineMath>{'\\sqrt' + '{ 1 / 2}'}</InlineMath>
            </Button>
          </Tooltip>
        </div>
        <div className='formular-control-block'>
          <div style={{ paddingLeft: '2px' }}>Functions</div>
          <Tooltip placement='topLeft' title='sine of x (x is in radians)'>
            <Button
              onClick={this.props.onChange.bind(this, 'Math.sin(x)', 'sin(x)')}
            >
              sin
            </Button>
          </Tooltip>
          <Tooltip
            placement='topLeft'
            title='function returns the hyperbolic sine of a number'
          >
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.sinh(x)',
                'sinh(x)'
              )}
            >
              sinh
            </Button>
          </Tooltip>
          <Tooltip
            placement='topLeft'
            title='function returns the arcsine (in radians) of a number'
          >
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.asin(x)',
                'asin(x)'
              )}
            >
              asin
            </Button>
          </Tooltip>
          <Tooltip
            placement='topLeft'
            title='function returns the hyperbolic arcsine of a number'
          >
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.asinh(x)',
                'asinh(x)'
              )}
            >
              asinh
            </Button>
          </Tooltip>
          <Tooltip placement='topLeft' title='absolute value of x'>
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.abs(x)',
                '\\lvert x \\rvert'
              )}
            >
              <InlineMath>{'\\lvert x \\rvert'}</InlineMath>
            </Button>
          </Tooltip>
          <Tooltip
            placement='topLeft'
            title='The value of x rounded up to its nearest integer'
          >
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.ceil(x)',
                '\\lceil x \\rceil'
              )}
            >
              <InlineMath>{'\\lceil x \\rceil'}</InlineMath>
            </Button>
          </Tooltip>
          <Tooltip
            placement='topLeft'
            title='The value of x rounded down to its nearest integer'
          >
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.round(x)',
                'round(x)'
              )}
            >
              round
            </Button>
          </Tooltip>
          <Tooltip placement='topLeft' title='The value of Ex'>
            <Button
              onClick={this.props.onChange.bind(this, 'Math.exp(x)', 'e^x')}
            >
              <InlineMath>e^x</InlineMath>
            </Button>
          </Tooltip>
          <Tooltip
            placement='topLeft'
            title='Function returns the cube root of a number,'
          >
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.cbrt(x)',
                ' \\sqrt[3]{x}'
              )}
            >
              <InlineMath>{'\\sqrt[3]{x}'}</InlineMath>
            </Button>
          </Tooltip>
        </div>
        <div className='formular-control-block'>
          <div style={{ padding: '11px' }} />
          <Tooltip placement='topLeft' title='Cosine of x (x is in radians)'>
            <Button
              onClick={this.props.onChange.bind(this, 'Math.cos(x)', 'cos(x)')}
            >
              cos
            </Button>
          </Tooltip>
          <Tooltip
            placement='topLeft'
            title='The hyperbolic cosine of a number, that can be expressed'
          >
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.cosh(x)',
                'cosh(x)'
              )}
            >
              cosh
            </Button>
          </Tooltip>
          <Tooltip
            placement='topLeft'
            title='Function returns the arccosine (in radians) of a number'
          >
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.acos(x)',
                'acos(x)'
              )}
            >
              acos
            </Button>
          </Tooltip>
          <Tooltip
            placement='topLeft'
            title='Function returns the hyperbolic arc-cosine of a number'
          >
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.acosh(x)',
                'acosh(x)'
              )}
            >
              acosh
            </Button>
          </Tooltip>
          <Tooltip
            placement='topLeft'
            title=' The number with the lowest value'
          >
            <Button
              onClick={this.props.onChange.bind(this, 'Math.min(x)', 'min(x)')}
            >
              min
            </Button>
          </Tooltip>
          <Tooltip
            placement='topLeft'
            title='Rounded downwards to the nearest integer'
          >
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.floor(x)',
                '{\\lfloor x \\rfloor}'
              )}
            >
              <InlineMath>{'\\lfloor x \\rfloor'}</InlineMath>
            </Button>
          </Tooltip>
          <Tooltip placement='topLeft' title='The integer part of a number (x)'>
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.trunc(x)',
                'trunc(x)'
              )}
            >
              trunc
            </Button>
          </Tooltip>
          <Tooltip
            placement='topLeft'
            title='The natural logarithm (base E) of x'
          >
            <Button
              onClick={this.props.onChange.bind(this, 'Math.log(x)', 'log_e x')}
            >
              <InlineMath>log_e x</InlineMath>
            </Button>
          </Tooltip>
          <Tooltip placement='topLeft' title='The square root of x'>
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.sqrt(x)',
                '\\sqrt {x}'
              )}
            >
              <InlineMath>{'\\sqrt{x}'}</InlineMath>
            </Button>
          </Tooltip>
        </div>
        <div className='formular-control-block' style={{ marginRight: '25px' }}>
          <div style={{ padding: '11px' }} />
          <Tooltip placement='topLeft' title='tan of x (x is in radians)'>
            <Button
              onClick={this.props.onChange.bind(this, 'Math.tan(x)', 'tan(x)')}
            >
              tan
            </Button>
          </Tooltip>
          <Tooltip
            placement='topLeft'
            title='The hyperbolic tangent of a number'
          >
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.tanh(x)',
                'tanh(x)'
              )}
            >
              tanh
            </Button>
          </Tooltip>
          <Tooltip
            placement='topLeft'
            title='The arctangent of a specified number'
          >
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.atan(x)',
                'atan(x)'
              )}
            >
              atan
            </Button>
          </Tooltip>
          <Tooltip
            placement='topLeft'
            title='The hyperbolic arctangent of a specified number'
          >
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.atanh(x)',
                'atanh(x)'
              )}
            >
              atanh
            </Button>
          </Tooltip>
          <Tooltip
            placement='topLeft'
            title='The number with the highest value'
          >
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.max(x)',
                '\\max(x)'
              )}
            >
              max
            </Button>
          </Tooltip>
          <Tooltip
            placement='topLeft'
            title='Random number between 0 (inclusive) and 1 (exclusive)'
          >
            <Button
              onClick={this.props.onChange.bind(
                this,
                'Math.random()',
                'random()'
              )}
            >
              random
            </Button>
          </Tooltip>
          <Tooltip
            placement='topLeft'
            title='The pow() method returns the value of x to the power of y'
          >
            <Button
              onClick={this.props.onChange.bind(this, 'Math.pow(x,y)', 'x^y')}
            >
              <InlineMath>x^y</InlineMath>
            </Button>
          </Tooltip>
        </div>
        <div className='formular-control-block'>
          <div>Num</div>
          <Button onClick={this.props.onChange.bind(this, ' 7', ' 7')}>
            7
          </Button>
          <Button onClick={this.props.onChange.bind(this, ' 4', ' 4')}>
            4
          </Button>
          <Button onClick={this.props.onChange.bind(this, ' 1', ' 1')}>
            1
          </Button>
          <Button onClick={this.props.onChange.bind(this, ' 0', ' 0')}>
            0
          </Button>
          <Button onClick={this.props.onChange.bind(this, ' (', ' (')}>
            (
          </Button>
        </div>
        <div className='formular-control-block'>
          <div style={{ padding: '11px' }} />
          <Button onClick={this.props.onChange.bind(this, ' 8', ' 8')}>
            8
          </Button>
          <Button onClick={this.props.onChange.bind(this, ' 5', ' 5')}>
            5
          </Button>
          <Button onClick={this.props.onChange.bind(this, ' 2', ' 2')}>
            2
          </Button>
          <Button onClick={this.props.onChange.bind(this, ' .', ' .')}>
            .
          </Button>
          <Button onClick={this.props.onChange.bind(this, ' )', ' )')}>
            )
          </Button>
        </div>
        <div className='formular-control-block'>
          <div style={{ padding: '11px' }} />
          <Button onClick={this.props.onChange.bind(this, ' 9', ' 9')}>
            9
          </Button>
          <Button onClick={this.props.onChange.bind(this, ' 6', ' 6')}>
            6
          </Button>
          <Button onClick={this.props.onChange.bind(this, ' 3', ' 3')}>
            3
          </Button>
        </div>
      </div>
    )
  }
}
