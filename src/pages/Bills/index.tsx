import React, { useState } from 'react';

import style from './css/bills.module.css';
import Input_Image from '../../components/atom/Input_Image';

const Bills: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.includes("image/")) {
        alert("กรุณาอัพโหลดไฟล์รูปภาพเท่านั้น");
        return;
      }
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string); // อัปเดตภาพที่อัปโหลด
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Input_Image
        img={image}
        onFileChange={handleFileChange}
      />
    </div>
  )
}

export default Bills