import { BallTriangle } from "react-loader-spinner";

const loaderWrapperStyle = {
  display: "flex",
  justifyContent: "center",
  paddingTop: "50px",
};

function Loader({ size }: { size: number }) {
  return (
    <div>
      <BallTriangle
        height={size}
        width={size}
        radius={5}
        color="#15101d"
        ariaLabel="ball-triangle-loading"
        visible={true}
        wrapperStyle={loaderWrapperStyle}
      />
    </div>
  );
}

export default Loader;
