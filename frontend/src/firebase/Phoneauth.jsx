import PhoneInput from 'react-phone-input-2'

import 'react-phone-input-2/lib/material.css'
const Phoneauth = () => {
    return (
      <>
      <PhoneInput
   country={'ph'}
   countryCodeEditable={false}
   onlyCountries={['ph']}
   enableAreaCodes={['ph']}
   masks={{ph: '... ... ....'}}
/>
      </>
    );
  };
  
  export default Phoneauth;
  