import React from 'react'

export const Loading = () => {
  return (
    //returning a loading spinner over here
    <div className='col-12'>
      {/* making a spinner, 3x times speed and making color primary and forward spinnning */}
      <span className='fa fa-spinner fa-pulse fa-3x fa-fw text-primary'></span>
      <p>Loading . . .</p>
    </div>
  )
}
