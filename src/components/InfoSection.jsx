import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faHeart, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const InfoSection = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', backgroundColor: '#fff9f4' }}>
      {/* Shipping Charges */}
      <div style={{ display: 'flex', alignItems: 'center', width: '300px' }}>
        <FontAwesomeIcon icon={faTruck} style={{ fontSize: '30px', color: '#e57373', marginRight: '15px' }} />
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>SHIPPING CHARGES</h3>
          <p style={{ color: '#666', margin: 0 }}>Starting from Rs. 120</p>
        </div>
      </div>
      
      {/* Crafted with Care */}
      <div style={{ display: 'flex', alignItems: 'center', width: '300px' }}>
        <FontAwesomeIcon icon={faHeart} style={{ fontSize: '30px', color: '#e57373', marginRight: '15px' }} />
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>CRAFTED WITH CARE</h3>
          <p style={{ color: '#666', margin: 0 }}>Curated with you in mind.</p>
        </div>
      </div>
      
      {/* Find Stores */}
      <div style={{ display: 'flex', alignItems: 'center', width: '300px' }}>
        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ fontSize: '30px', color: '#e57373', marginRight: '15px' }} />
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>FIND STORES</h3>
          <p style={{ color: '#666', margin: 0 }}>Stores countrywide across Pakistan, UK, UAE, US.</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
