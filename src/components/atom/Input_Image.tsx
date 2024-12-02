import React from 'react';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

import style from './css/inputImage.module.css';

interface InputImgProps {
  img: string | null; 
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input_Image: React.FC<InputImgProps> = ( Prop ) => {

  return (
    <div className={style.content}>
      {!Prop.img && (
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

      {Prop.img && <img src={Prop.img} alt="Uploaded" className={style.uploadedImage} />}

      <input
        type="file"
        accept="image/*"
        className={style.hiddenInput}
        onChange={Prop.onFileChange} // ใช้ฟังก์ชันที่ส่งมาจาก page
      />
    </div>
  );
};

export default Input_Image;
