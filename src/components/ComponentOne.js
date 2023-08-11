import React from "react";

const styles = {
  backgroundColor: "green",
};

function ComponentOne() {
  return (
    <>
      <div style={{ backgroundColor: "red" }}>Jesus</div>
      <div style={styles}>Christ</div>
    </>

    // <div style="backgroundColor:red">ComponentOne</div>
  );
}

export default ComponentOne;