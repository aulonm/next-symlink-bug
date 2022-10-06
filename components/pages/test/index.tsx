import { GetServerSideProps } from "next";
import React from "react";

interface Props {
  title: String;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      title: "This works",
    },
  };
};

export const test = (props: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      {props.title}
    </div>
  );
};

export default test;
