var React = require('react')
  , Button = require('../../bootstrap').Button
  , ButtonGroup = require('../../bootstrap').ButtonGroup
  , RW = require('../../../index');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      value: 15,
      format: 'D',
      step: 1,
    }
  },

  render: function(){

    return (
      <div className='example '>
        <div className='row'>
          <div className='col-sm-8 demo'>
            <RW.NumberPicker
                value={this.state.value}
                onChange={this._change}
                max={this.state.max}
                min={this.state.min}
                step={this.state.step}
                disabled={this.state.disabled === 'disabled'}
                readOnly={this.state.disabled === 'readonly'}
                format={this.state.format}
                onChange={this._change}
                isRtl={this.state.isRtl}/>
          </div>
          <div className='col-sm-4 api-panel'>
            <div className='form-group'>
              <label className='checkbox-inline'>
                <input type='checkbox'
                  checked={this.state.isRtl}
                  onChange={this._set.bind(null, 'isRtl', !this.state.isRtl)}/>
                  Right to Left
              </label>
            </div>
            <div className='form-group'>
              <ButtonGroup>
                <Button
                  active={this.state.disabled === 'disabled'}
                  onClick={this.disabled}>
                  Disable
                </Button>
                <Button
                  active={this.state.disabled === 'readonly'}
                  onClick={this.readOnly}>
                  Readonly
                </Button>
              </ButtonGroup>
            </div>
            <div className='form-group'>
              <label className='form-label'>Filter</label>
              <RW.DropdownList
                  value={this.state.filter || false}
                  data={[false, 'startsWith', 'endsWith', 'contains']}
                  onChange={this._set.bind(null, 'filter')}/>
            </div>

            <div className='form-group'>
              <label className='form-label'>step</label>
              <RW.NumberPicker
                  value={this.state.step}
                  onChange={this._set.bind(null, 'step')}/>
            </div>
            <div className='form-group'>
              <label className='form-label'>min</label>
              <RW.NumberPicker
                  value={this.state.min}
                  onChange={this._set.bind(null, 'min')}/>
            </div>
            <div className='form-group'>
              <label className='form-label'>max</label>
              <RW.NumberPicker
                  value={this.state.max}
                  onChange={this._set.bind(null, 'max')}/>
            </div>
          </div>
        </div>
      </div>
    )
  },

  _change: function(val){
    this.setState({ value: val })
  },

  _set: function(field, value){
    var obj = {}
    obj[field] = value
    this.setState(obj)
  },

  readOnly: function(){
    var val = this.state.disabled === 'readonly' ? false : 'readonly'
    this.setState({ disabled: val })
  },

  disabled: function(){
    var val = this.state.disabled === 'disabled' ? false : 'disabled'
    this.setState({ disabled: val })
  },

})

function extract(fn){
  return function(e){
    return fn(e.target.value)
  }
}