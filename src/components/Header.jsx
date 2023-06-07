import imgSrc from './../assets/008_Saint-Gobain.png';
import imgLogo from './../assets/logo.png';

function MyHeader() {
  return (
    <div style={{ position: "relative" }}>
      <img
        src={imgSrc}
        alt="imagem da sga macedo"
        style={{
          width: "100%",
          height: "auto",
          boxShadow: "0 0 10px 8px rgba(0, 0, 0, 0.5)",
          filter: "blur(15px)"
        }}
      />
      <img
        src={imgLogo}
        alt="sga logo"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width:"100%",
          height:"60%",
          transform: "translate(-50%, -50%)"
        }}
      />
    </div>
  );
}

export default MyHeader;
