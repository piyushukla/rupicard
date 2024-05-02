import React from "react";

const feature_obj = [
  {
    img: "https://www.uni.cards/images/nx-wave/whatsapp_bubble.webp",
    title: "Help, just a WhatsApp away. Anytime, Anyday.",
    description:
      "During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.",
  },
  {
    img: "https://www.uni.cards/images/nx-wave/rupee_bubble.webp",
    title: "No hidden charges, no last minute surprises.",
    description:
      "100% money back guarantee if a charge is applied without your knowledge.",
  },
  {
    img: "https://www.uni.cards/images/nx-wave/antivirus_bubble.webp",
    title: "Super secure. Because we care about your money.s",
    description:
      "100% money back guarantee if a charge is applied without your knowledge.",
  },
];

const FeatureContainer = () => {
  return (
    <div className="featuer-cardParent">
      {feature_obj?.map((data) => (
        <div
          className="feature-card"
        >
          <img src={data?.img} alt="img" style={{width:'100px'}} />
          <p style={{color:'#ffffff',textAlign:'left'}}>{data?.title}</p>
          <p style={{color:'grey',textAlign:'left'}}>{data?.description}</p>
        </div>
      ))}
    </div>
  );
};
export default FeatureContainer;
