import React, { Component, Fragment } from 'react'

class SliderLoding extends Component {
  render() {
    const Lodings = this.props.data;
    return (
      <Fragment>
    <div className={Lodings}>
        <div className='row'>
            <div className='col-3'>
                <div class="ph-row">
                        <div class="ph-col-12"></div>
                        <div class="ph-col-12"></div>
                        <div class="ph-col-12"></div>
                        <div class="ph-col-12"></div>
                        <div class="ph-col-12"></div>
                        <div class="ph-col-12"></div>
                        <div class="ph-col-12"></div>
                        <div class="ph-col-12"></div>

                </div>
            </div>
            <div className='col-9'>
                <div class="ph-picture"></div>
            </div>
        </div>
       
    </div>
      </Fragment>
    )
  }
}

export default SliderLoding