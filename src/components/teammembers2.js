import React from 'react'

import PropTypes from 'prop-types'

import './teammembers2.css'

const Teammembers = (props) => {

  console.log(props.val);
  return (
    <div className={`teammembers-item ${props.rootClassName} `}>
      <div className="teammembers-details">
        <h3 className="teammembers-title">{props.val}</h3>
        <p className="teammembers-description">{props.Description}</p>
        <p className="teammembers-description1">{props.Description2}</p>
        <p className="teammembers-description2">{props.Description1}</p>
      </div>
    </div>
  )
}

Teammembers.defaultProps = {
  Description: 'Hackathon Name',
  rootClassName: '',
  Title: 'Team Name',
  Description1: 'Chat ➡️',
  Description2: 'College',
}

Teammembers.propTypes = {
  Description: PropTypes.string,
  rootClassName: PropTypes.string,
  Title: PropTypes.string,
  Description1: PropTypes.string,
  Description2: PropTypes.string,
}

export default Teammembers
