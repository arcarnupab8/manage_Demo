import React, { useState } from 'react';

import style from './css/bills.module.css';
import Input_Image from '../../components/atom/Input_Image';

const Bills: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  return (
    <div>
      <Input_Image
        img={image}
        onImageChange={setImage}
      />
    </div>
  )
}

export default Bills