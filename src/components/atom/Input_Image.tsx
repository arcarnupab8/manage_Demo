import React from 'react';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

import style from './css/inputImage.module.css';

interface InputImgProps {
  img: string | null; 
  onImageChange: (newImg: string | null) => void; 
}

const Input_Image: React.FC<InputImgProps> = ({ img, onImageChange }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.includes("image/")) {
        alert("กรุณาอัพโหลดไฟล์รูปภาพเท่านั้น");
        return;
      }
      const reader = new FileReader();
      reader.onload = () => onImageChange(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={style.content}>
      {!img && (
        <LocalHospitalIcon
          sx={{
            color: "#0000008A",
            width: "40px",
            height: "40px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      {img && <img src={img} alt="Uploaded" className={style.uploadedImage} />}

      <input
        type="file"
        accept="image/*"
        className={style.hiddenInput}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default Input_Image;
